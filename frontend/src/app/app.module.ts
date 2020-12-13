import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { AuthserviceService } from './auth/authservice.service';
import { FinanceService } from './services/finance.service';
import { InventoryService } from './services/inventory.service';
import { MembersService } from './services/members.service'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthGuard } from './auth/auth.guard';
import { TokenInterceptorService } from './auth/token-interceptor.service';
import { InventoryComponent } from './inventory/inventory.component';
import { FinanceComponent } from './finance/finance/finance.component';
import { StaffComponent } from './staff/staff.component';
import { MembersComponent } from './members/members/members.component';
import { RoomreservationComponent } from './roomreservation/roomreservation.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { LandingComponent } from './landing/landing.component';
import { AddBillComponent } from './finance/add-bill/add-bill.component';
import { GetIncomeComponent } from './finance/get-income/get-income.component';
import { GetBillComponent } from './finance/get-bill/get-bill.component';
import { AddmemberComponent } from './members/addmember/addmember.component';
import { GetmemberComponent } from './members/getmember/getmember.component';
import { UpdatememberComponent } from './members/updatemember/updatemember.component';
import { MemberParentComponent } from './members/member-parent/member-parent.component';
import { FinanceParentComponent } from './finance/finance-parent/finance-parent.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    InventoryComponent,
    FinanceComponent,
    StaffComponent,
    MembersComponent,
    RoomreservationComponent,
    NavbarComponent,
    FooterComponent,
    LandingComponent,
    AddBillComponent,
    GetIncomeComponent,
    GetBillComponent,
    AddmemberComponent,
    GetmemberComponent,
    UpdatememberComponent,
    MemberParentComponent,
    FinanceParentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthserviceService, AuthGuard, FinanceService, InventoryService, MembersService,
  {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
