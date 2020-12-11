import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { AuthserviceService } from './authservice.service';
import { FinanceService } from './finance.service';
import { InventoryService } from './inventory.service'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthGuard } from './auth.guard';
import { TokenInterceptorService } from './token-interceptor.service';
import { InventoryComponent } from './inventory/inventory.component';
import { FinanceComponent } from './finance/finance.component';
import { StaffComponent } from './staff/staff.component';
import { MembersComponent } from './members/members.component';
import { HallreservationComponent } from './hallreservation/hallreservation.component';
import { RoomreservationComponent } from './roomreservation/roomreservation.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { LandingComponent } from './landing/landing.component';


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
    HallreservationComponent,
    RoomreservationComponent,
    NavbarComponent,
    FooterComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthserviceService, AuthGuard, FinanceService, InventoryService,
  {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
