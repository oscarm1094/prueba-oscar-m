import {Component, OnInit} from '@angular/core';
import {USERS} from "../../models/user-list";
import {User} from "../../models/user";
import {UserService} from "../servicios/user.service";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  userList: User[] = [];

  constructor(private userService: UserService) {
  }

  search: string = '';

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getUsers()
      .subscribe(users => {
        console.log(users);
        this.userList = users
      });
  }


  onSelect(identificacion: string): void {
    console.log(identificacion);
  }

  onDelete(identificacion: string): void {
    this.userList = this.userList.filter(x => x.identificacion !== identificacion);
    this.userService.deleteUser(identificacion).subscribe();

  }

  searchUsers(term: string) {
    if(!term){
      this.getUsers();
    }
    this.userList = this.userList.filter(x => {
      return x.username.includes(term) ||
        x.identificacion.includes(term) ||
        x.email.includes(term);
    })
  }

}
