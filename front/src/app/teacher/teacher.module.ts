import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherRoutingModule } from './teacher-routing.module';

import { RouterModule } from '@angular/router';
import { TeacherDashboardComponent } from './teacher-dashboard/teacher-dashboard.component';
import { ProgramsComponent } from './programs/programs.component';
import { GroupsComponent } from './groups/groups.component';
import { ChildrenComponent } from './children/children.component';
import { PaymentsComponent } from './payments/payments.component';

@NgModule({
  declarations: [
    TeacherDashboardComponent,
    ProgramsComponent,
    GroupsComponent,
    ChildrenComponent,
    PaymentsComponent,
  ],
  imports: [
    CommonModule, // Ajouté ici
    TeacherRoutingModule, // Ajouté ici
    RouterModule.forChild([ // Les routes spécifiques au module
      { path: 'dashboard', component: TeacherDashboardComponent },
      { path: 'programs', component: ProgramsComponent },
      { path: 'groups', component: GroupsComponent },
      { path: 'children', component: ChildrenComponent },
      { path: 'payments', component: PaymentsComponent },
    ]),
  ],
})
export class TeacherModule { }
