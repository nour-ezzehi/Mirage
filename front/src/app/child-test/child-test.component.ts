import { Component, OnInit } from '@angular/core';
import { ChildService } from '../shared/services/child.service';
import { Child } from '../shared/interfaces/child';

@Component({
  selector: 'app-child-test',
  template: `
    <div *ngFor="let child of children" class="child-card">
      <h3>{{ child.name }}</h3>
      <p>Age: {{ child.age }} ans</p>
      <p>Classe: {{ child.class }}</p>
    </div>
  `,
  styleUrls: ['./child-test.component.css']
})
export class ChildTestComponent implements OnInit {
  children: Child[] = [];

  constructor(private childService: ChildService) {}

  ngOnInit(): void {
    this.childService.getChildren().subscribe(
      (data) => {
        this.children = data;
        console.log(this.children);  // Affiche les données dans la console
      },
      (error) => {
        console.error('Erreur lors de la récupération des données:', error);
      }
    );
  }
}
