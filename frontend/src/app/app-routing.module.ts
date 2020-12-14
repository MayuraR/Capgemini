import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { AddBillComponent } from './finance/add-bill/add-bill.component';
import { FinanceParentComponent } from './finance/finance-parent/finance-parent.component';
import { FinanceComponent } from './finance/finance/finance.component';
import { GetBillComponent } from './finance/get-bill/get-bill.component';
import { GetIncomeComponent } from './finance/get-income/get-income.component';
import { HomeComponent } from './home/home.component';
import { InventoryComponent } from './inventory/inventory.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { AddmemberComponent } from './members/addmember/addmember.component';
import { GetmemberComponent } from './members/getmember/getmember.component';
import { MemberParentComponent } from './members/member-parent/member-parent.component';
import { MembersComponent } from './members/members/members.component';
import { UpdatememberComponent } from './members/updatemember/updatemember.component';
import { AddreservationComponent } from './roomreservation/addreservation/addreservation/addreservation.component';
import { AvailableComponent } from './roomreservation/available/available/available.component';
import { DeletereservationComponent } from './roomreservation/deletereservation/deletereservation/deletereservation.component';
import { GetreservationComponent } from './roomreservation/getreservation/getreservation/getreservation.component';
import { ParentRoomreservationComponent } from './roomreservation/parent-roomreservation/parent-roomreservation/parent-roomreservation.component';
import { ReservationComponent } from './roomreservation/reservation/reservation/reservation.component';
import { UpdatereservationComponent } from './roomreservation/updatereservation/updatereservation/updatereservation.component';
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
    component: FinanceParentComponent,
    canActivate: [AuthGuard],
    children:[
      {path : '', component: FinanceComponent},
      {path : 'addBill',component : AddBillComponent},
      {path : 'getIncome',component : GetIncomeComponent},
      {path : 'getBill',component : GetBillComponent},
    ]
  },
  {
    path : 'getBill',
    component : GetBillComponent,
    canActivate: [AuthGuard],
  },
  {
    path : 'staff', 
    component: StaffComponent,
    canActivate: [AuthGuard]
  },
  {
    path : 'members', 
    component: MemberParentComponent,
    canActivate: [AuthGuard],
    children:[
      {path:'', component: MembersComponent},
      {path: 'addMember', component: AddmemberComponent},
      {path : 'getMember', component: GetmemberComponent},
      {path : 'updateMember', component: UpdatememberComponent},
    ]
  },
  
  {
    path : 'roomreservation', 
    component: ParentRoomreservationComponent,
    canActivate: [AuthGuard],
    children:[
      {path:'', component: ReservationComponent},
      {path: 'addReservation', component:AddreservationComponent},
      {path: 'available', component:AvailableComponent},
      {path: 'deleteReservation', component:DeletereservationComponent},
      {path: 'getReservation', component: GetreservationComponent},
      {path: 'updateReservation', component:UpdatereservationComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
