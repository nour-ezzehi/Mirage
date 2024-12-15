import { Component, OnInit } from '@angular/core';
import { ProgramService } from 'src/app/shared/services/program.service';
import { Program } from 'src/app/shared/interfaces/program';

@Component({
  selector: 'app-programs',
  template: `
    <h2>Gestion des Programmes</h2>
    <ul>
      <li *ngFor="let program of programs">{{ program.name }} - {{ program.duration }} semaines</li>
    </ul>
  `,
  styleUrls: ['./programs.component.css']
})
export class ProgramsComponent implements OnInit {
  programs: Program[] = [];

  constructor(private programService: ProgramService) {}

  ngOnInit() {
    this.programService.getPrograms().subscribe(data => {
      this.programs = data;
    });
  }
}
