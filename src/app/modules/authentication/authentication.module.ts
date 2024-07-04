import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ModRoutingModule } from './authentication-routing';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
//  import { HttpClientModule } from '@angular/common/http';
const routes: Routes = [
  { path: 'login', component: LoginComponent },
];
@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    ModRoutingModule,FormsModule,RegisterComponent, RouterModule.forChild(routes) //HttpClientModule,

  ],
  exports:[
     RegisterComponent
  ]
})
export class ModModule { }
