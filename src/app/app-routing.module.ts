import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {UserFormComponent} from "./usuario/user-form/user-form.component";
import {UserListComponent} from "./usuario/user-list/user-list.component";

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'user', component: UserFormComponent},
  {path: 'user-list', component: UserListComponent},
  {path: 'usuario/edit/:identificacion', component: UserFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
