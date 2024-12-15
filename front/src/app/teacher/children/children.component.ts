import { Component, OnInit } from '@angular/core';
import { ChildrenService } from 'src/app/services/children.service';

@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.css']
})
export class ChildrenComponent implements OnInit {
  data: any[] = []; // This will hold the fetched data from the API

  constructor(private childrenService: ChildrenService) {}

  ngOnInit(): void {
    this.fetchData(); // Fetch data on component initialization
  }

  fetchData(): void {
    this.childrenService.getstudents().subscribe({
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



