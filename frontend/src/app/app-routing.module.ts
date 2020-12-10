import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { FinanceComponent } from './finance/finance.component';
import { HallreservationComponent } from './hallreservation/hallreservation.component';
import { HomeComponent } from './home/home.component';
import { InventoryComponent } from './inventory/inventory.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { MembersComponent } from './members/members.component';
import { RoomreservationComponent } from './roomreservation/roomreservation.component';
import { SignupComponent } from './signup/signup.component';
import { StaffComponent } from './staff/staff.component';

const routes: Routes = [
  {
    path : '', 
    component : LandingComponent
  },
  {
    path : 'login', 
    component : LoginComponent
  },
  {
    path: 'signup', 
    component: SignupComponent,
    canActivate: [AuthGuard]
  },
  {
    path : 'home', 
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path : 'inventory', 
    component: InventoryComponent,
    canActivate: [AuthGuard]
  },
  {
    path : 'finance', 
    component: FinanceComponent,
    canActivate: [AuthGuard]
  },
  {
    path : 'staff', 
    component: StaffComponent,
    canActivate: [AuthGuard]
  },
  {
    path : 'members', 
    component: MembersComponent,
    canActivate: [AuthGuard]
  },
  {
    path : 'hallreservation', 
    component: HallreservationComponent,
    canActivate: [AuthGuard]
  },
  {
    path : 'roomreservation', 
    component: RoomreservationComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
