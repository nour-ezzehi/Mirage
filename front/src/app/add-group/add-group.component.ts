import { Component } from '@angular/core';
import { groupService } from 'src/app/services/groups.service';
import { Group } from 'src/app/shared/interfaces/group';

@Component({
  selector: 'app-add-group',
  templateUrl: './add-group.component.html',
  styleUrls: ['./add-group.component.css']
})

export class AddGroupComponent {
  group: Group = { id: 0, name: '',   timetable: '' }; // Initialize with default values

  constructor(private groupService: groupService) {}

  // Method to add a new group
  addGroup(): void {
    this.groupService.createGroup(this.group).subscribe({
      next: (newGroup: Group): void => {
        console.log('Group created:', newGroup);
        // Optionally navigate to the groups list or show a success message
      },
      error: (err: any): void => {
        console.error('Error creating group:', err);
      }
    });
  }
}
