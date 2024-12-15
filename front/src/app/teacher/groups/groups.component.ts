import { Component, OnInit } from '@angular/core';
import { groupService } from 'src/app/services/groups.service';
import { Router } from '@angular/router';
import { Group } from 'src/app/shared/interfaces/group';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {
  data: any[] = []; // This will hold the fetched data from the API
  group: any = {};  // Pour l'ajout ou la modification d'un groupe
  selectedGroupId: number | null = null;

  constructor(private groupService: groupService, private router: Router) {}

  ngOnInit(): void {
    this.fetchData(); // Fetch data on component initialization
  }

  fetchData(): void {
    this.groupService.getgroups().subscribe({
      next: (response) => {
        this.data = response; // Assign fetched data to 'data' array
        console.log('Fetched data:', this.data);
      },
      error: (err) => {
        console.error('Error fetching data:', err);
      },
    });
  }

  

  editGroup(group: Group): void {
    this.router.navigate(['/app-app-edit', group.id]); // Rediriger vers /edit/:id
  }
  addGroup(group: Group): void {
    this.router.navigate(['/app-app-add', group.id]); // Rediriger vers /edit/:id
  }

  deleteGroup(groupId: number): void {
    this.groupService.deleteGroup(groupId).subscribe({
      next: () => {
        console.log('Group deleted successfully');
        this.fetchData(); // Recharger les données après suppression
      },
      error: (err) => {
        console.error('Error deleting group:', err);
      },
    });
  }

  
}