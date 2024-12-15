import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { groupService } from 'src/app/services/groups.service';

@Component({
  selector: 'app-app-delete',
  templateUrl: './app-delete.component.html',
  styleUrls: ['./app-delete.component.css']
})
export class AppDeleteComponent implements OnInit {
  groupId: number = 0;

  constructor(
    private route: ActivatedRoute,
    private groupService: groupService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.groupId = +this.route.snapshot.paramMap.get('id')!; // Get the group ID from the route
  }

  // Method to delete a group
  deleteGroup(): void {
    this.groupService.deleteGroup(this.groupId).subscribe({
      next: () => {
        console.log('Group deleted');
        this.router.navigate(['/groups']); // Navigate back to the group list
      },
      error: (err) => {
        console.error('Error deleting group:', err);
      }
    });
  }
}
