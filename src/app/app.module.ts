import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RootComponent } from './root/root.component';
import { HomeComponent } from './home/home.component';
import { TimerComponent } from './timer/timer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'timer', component: TimerComponent },
    ]),
  ],
  declarations: [RootComponent, HomeComponent, TimerComponent, NavbarComponent],
  bootstrap: [RootComponent],
})
export class AppModule {}
