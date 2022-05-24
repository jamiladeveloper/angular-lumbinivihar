import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnnouncementComponent } from './component/announcement/announcement.component';
import { DonationComponent } from './component/donation/donation.component';
import { EventsComponent } from './component/events/events.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { NewsComponent } from './component/news/news.component';
import { NotfoundComponent } from './component/notfound/notfound.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  { path : 'login', component : LoginComponent },
  { path : 'home', component : HomeComponent, canActivate : [AuthGuard] },
  { path : 'announcement', component : AnnouncementComponent, canActivate : [AuthGuard] },
  { path : 'donation', component : DonationComponent, canActivate : [AuthGuard] },
  { path : 'events' , component : EventsComponent, canActivate : [AuthGuard] },
  { path : 'news', component : NewsComponent, canActivate : [AuthGuard] },
  { path : '', redirectTo : '/home', pathMatch : 'full' },
  { path : '**', component : NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
