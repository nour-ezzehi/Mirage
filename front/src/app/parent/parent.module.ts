import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ParentRoutingModule } from './parent-routing.module';
import { ParentDashboardComponent } from './parent-dashboard/parent-dashboard.component';
import { ChildProgressComponent } from './child-progress/child-progress.component';
import { ChildAttendanceComponent } from './child-attendance/child-attendance.component';
import { ChildStickersComponent } from './child-stickers/child-stickers.component';
import { PaymentHistoryComponent } from './payment-history/payment-history.component';


@NgModule({
  declarations: [
    ParentDashboardComponent,
    ChildProgressComponent,
    ChildAttendanceComponent,
    ChildStickersComponent,
    PaymentHistoryComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'dashboard', component: ParentDashboardComponent },
      { path: 'progress', component: ChildProgressComponent },
      { path: 'attendance', component: ChildAttendanceComponent },
      { path: 'stickers', component: ChildStickersComponent },
      { path: 'payments', component: PaymentHistoryComponent },
    ]),
  ],
})
export class ParentModule { }
