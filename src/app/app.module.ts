import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { FormsModule } from '@angular/forms';
import { LandingComponent } from './landing/landing.component';
import { AdminChildComponent } from './admin-child/admin-child.component';
import { AdminExpensesComponent } from './admin-expenses/admin-expenses.component';
import { AlterMembersComponent } from './alter-members/alter-members.component';
import { SchedulerComponent } from './scheduler/scheduler.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminhomeComponent,
    UserhomeComponent,
    LandingComponent,
    AdminChildComponent,
    AdminExpensesComponent,
    AlterMembersComponent,
    SchedulerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
