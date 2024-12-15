import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-teacher-dashboard',
  templateUrl: './teacher-dashboard.component.html',
  styleUrls: ['./teacher-dashboard.component.css'],
})
export class TeacherDashboardComponent implements OnInit {
  data: any[] = []; // This will hold the fetched data from the API

  constructor(private studentService: StudentService) {}

  ngOnInit(): void {
    this.fetchData(); // Fetch data on component initialization
  }

  fetchData(): void {
    this.studentService.getStudents().subscribe({
      next: (response) => {
        this.data = response; // Assign fetched data to 'data' array
        console.log('Fetched data:', this.data);
      },
      error: (err) => {
        console.error('Error fetching data:', err);
      },
    });
  }
}
