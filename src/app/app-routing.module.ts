import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { ApprovalComponent } from './component/approval/approval.component'
const routes: Routes = [
  {path :'' ,component: LoginComponent },
  {path :'login' ,component: LoginComponent },
  {path :'dashboard' ,component: DashboardComponent },
  {path :'approval' ,component: ApprovalComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
