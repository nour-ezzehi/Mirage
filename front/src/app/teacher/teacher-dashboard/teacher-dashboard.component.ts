import { Component } from '@angular/core';
import { ParentDashboardComponent } from 'src/app/parent/parent-dashboard/parent-dashboard.component';

@Component({
  selector: 'app-teacher-dashboard',
  templateUrl: './teacher-dashboard.component.html',
  styleUrls: ['./teacher-dashboard.component.css'],
})
export class TeacherDashboardComponent {
  teachers = [
    { name: 'John Doe', subject: 'Math 1', email: 'john.doe@gmail.com', status: 'active' },
    { name: 'Emily Brown', subject: 'Math 2', email: 'emily.brown@gmail.com', status: 'inactive' },
    { name: 'Robert Smith', subject: 'Science', email: 'robert.smith@gmail.com', status: 'active' },
    { name: 'Sophia Martinez', subject: 'Physics', email: 'sophia.martinez@gmail.com', status: 'inactive' },
  ];
}