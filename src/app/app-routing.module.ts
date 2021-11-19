import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EgyptTrapsComponent } from './egypt-traps/egypt-traps.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SaudiArabiaTrapsComponent } from './saudi-arabia-traps/saudi-arabia-traps.component';
import { TrapManagementComponent } from './trap-management/trap-management.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {path:'' , redirectTo: 'home', pathMatch:'full'},
  {path:'login' , component:LoginComponent},
  {path:'home' , component:DashboardComponent},
  {path:'users' , component:UsersComponent},
  {path:'trapManagement' , component:TrapManagementComponent},
  {path:'trapsInSaudiArabia' , component:SaudiArabiaTrapsComponent},
  {path:'trapsInEgypt' , component:EgyptTrapsComponent},
  {path:'**' , component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
