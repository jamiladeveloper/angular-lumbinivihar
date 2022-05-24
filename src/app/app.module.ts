import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { HomeComponent } from './component/home/home.component';
import { NotfoundComponent } from './component/notfound/notfound.component';
import { AnnouncementComponent } from './component/announcement/announcement.component';
import { EventsComponent } from './component/events/events.component';
import { NewsComponent } from './component/news/news.component';
import { DonationComponent } from './component/donation/donation.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginService } from './services/login.service';
import { AnnouncementService } from './services/announcement.service';
import { DonationService } from './services/donation.service';
import { EventService } from './services/event.service';
import { MemberService } from './services/member.service';
import { NewsService } from './services/news.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NotfoundComponent,
    AnnouncementComponent,
    EventsComponent,
    NewsComponent,
    DonationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    AnnouncementService,
    DonationService,
    EventService,
    LoginService,
    MemberService,
    NewsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
