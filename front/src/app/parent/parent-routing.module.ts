import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentDashboardComponent } from './parent-dashboard/parent-dashboard.component';
import { ChildProgressComponent } from './child-progress/child-progress.component';
import { ChildAttendanceComponent } from './child-attendance/child-attendance.component';
import { ChildStickersComponent } from './child-stickers/child-stickers.component';
import { PaymentHistoryComponent } from './payment-history/payment-history.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' }, // Redirection vers le tableau de bord
  { path: 'dashboard', component: ParentDashboardComponent },
  { path: 'progress', component: ChildProgressComponent },
  { path: 'attendance', component: ChildAttendanceComponent },
  { path: 'stickers', component: ChildStickersComponent },
  { path: 'payments', component: PaymentHistoryComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ParentRoutingModule { }
