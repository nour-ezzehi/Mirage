import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Group } from 'src/app/shared/interfaces/group';
import { groupService } from 'src/app/services/groups.service';
@Component({
  selector: 'app-app-edit',
  templateUrl: './app-edit.component.html',
  styleUrls: ['./app-edit.component.css']
})
export class AppEditComponent implements OnInit {
  group: Group = { id: 0, name: '', timetable: '' };

  constructor(
    private route: ActivatedRoute,
    private groupService: groupService,
    private router: Router
  ) {}
  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!; // Get the group ID from the route
    this.groupService.getGroupById(id).subscribe((group) => {
      this.group = group;
    });
  }

  // Method to update the group
  updateGroup(): void {
    this.groupService.updateGroup(this.group).subscribe({
      next: (updatedGroup) => {
        console.log('Group updated:', updatedGroup);
        this.router.navigate(['/groups']); // Navigate back to the group list
      },
      error: (err) => {
        console.error('Error updating group:', err);
      }
    });
  }
}