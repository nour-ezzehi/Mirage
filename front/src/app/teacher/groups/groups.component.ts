import { Component } from '@angular/core';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent {
  groups = [
    { name: 'TECHNOLOGY-GRP-01', time: '13:30 - 12:30' },
    { name: 'TECHNOLOGY-GRP-02', time: '13:30 - 12:30' },
    { name: 'TECHNOLOGY-GRP-03', time: '13:30 - 12:30' },
    { name: 'ARTIFICIAL INTELLIGENCE-GRP-01', time: '13:30 - 12:30' },
    { name: 'ARTIFICIAL INTELLIGENCE-GRP-02', time: '13:30 - 12:30' },
    { name: 'ARTIFICIAL INTELLIGENCE-GRP-03', time: '13:30 - 12:30' }
  ];
  
  constructor() { }

  // Method to handle view classes logic
  viewClasses(groupName: string) {
    console.log('Viewing classes for:', groupName);
  }

  // Method to handle new upload action
  newUpload() {
    console.log('New Upload initiated');
  }
}
