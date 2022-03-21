import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {User} from "../../models/user";
import {USERS} from "../../models/user-list";
import {UserService} from "../servicios/user.service";
import {AbstractControl, ValidationErrors, ValidatorFn} from "@angular/forms";

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  user: User = {
    identificacion: '',
    nombres: '',
    username: '',
    perfil: '',
    password: '',
    email: ''
  };

  submited:boolean = false;
  isEdit:boolean = false;

  regPass= /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/i;

  userEdit: User | undefined;
  listUser = USERS;
  passwordConfirmation:string='';

  constructor(private route: ActivatedRoute, private location: Location, private userService: UserService) {

  }

  ngOnInit(): void {
    this.isEdit = !!this.route.snapshot.params['identificacion'];
    if (!!this.route.snapshot.params['identificacion']) {
      this.getUser();
    }
  }

  getUser() {
    const id = this.route.snapshot.paramMap.get('identificacion') ?? '';

    this.userService.getUserById(id)
      .subscribe(user => {
        console.log("==: " + JSON.stringify(user));
        this.userEdit = JSON.parse(JSON.stringify(user));
        if (this.userEdit != undefined) {
          this.user = {...this.userEdit};
        }
      });

    console.log(this.user);
  }

  onSubmit(){
    //console.log(this.user);
    this.submited = true;
    if(this.isEdit){
      this.userService.updateUser(this.user).subscribe();
    }else{
      this.userService.createUser(this.user).subscribe( );
    }

  }
  validatePassword(value:string){

  }

}
