import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddNoteComponent } from './Components/add-note/add-note.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { ForgetComponent } from './Components/forget/forget.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { ResetComponent } from './Components/reset/reset.component';

const routes: Routes = [
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'forget',
    component:ForgetComponent
  },
  {
    path:'reset',
    component:ResetComponent
  },
  {
    path:'dashboard',
    component:DashboardComponent
  },
  {
    path:'addNote',
    component:AddNoteComponent
  },
  {
    path:'',
    redirectTo:'register',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
