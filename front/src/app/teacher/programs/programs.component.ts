import { Component, OnInit } from '@angular/core';
import { ProgramService } from 'src/app/services/program.service';


@Component({
  selector: 'app-programs',
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.css']
})
export class ProgramsComponent implements OnInit {
  data: any[] = []; // This will hold the fetched data from the API

  constructor(private programService: ProgramService) {}

  ngOnInit(): void {
    this.fetchData(); // Fetch data on component initialization
  }

  fetchData(): void {
    this.programService.getprograms().subscribe({
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

