import { SchedulerComponent } from './scheduler/scheduler.component';
import { AlterMembersComponent } from './alter-members/alter-members.component';
import { AdminExpensesComponent } from './admin-expenses/admin-expenses.component';
import { AdminChildComponent } from './admin-child/admin-child.component';
import { LandingComponent } from './landing/landing.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'adminHome', component: AdminhomeComponent,
    children: [
      { path: 'adminChild',component: AdminChildComponent},
      { path:'adminexpenses', component: AdminExpensesComponent},
      { path: 'adminedits', component: AlterMembersComponent},
      { path: 'schedules', component: SchedulerComponent}
    ]
  },
  { path: 'userHome', component: UserhomeComponent,
    children: [
      { path: 'adminChild',component: AdminChildComponent},
      { path:'adminexpenses', component: AdminExpensesComponent},
      { path: 'adminedits', component: AlterMembersComponent},
      { path: 'schedules', component: SchedulerComponent}
    ]
  },
  { path: '', component: LandingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
