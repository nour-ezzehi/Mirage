import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Program } from '../interfaces/program';

@Injectable({
  providedIn: 'root',
})
export class ProgramService {
  private baseUrl = 'http://localhost:3000/programs';

  constructor(private http: HttpClient) {}

  getPrograms(): Observable<Program[]> {
    return this.http.get<Program[]>(this.baseUrl);
  }

  getProgramById(id: number): Observable<Program> {
    return this.http.get<Program>(`${this.baseUrl}/${id}`);
  }

  addProgram(program: Program): Observable<Program> {
    return this.http.post<Program>(this.baseUrl, program);
  }

  updateProgram(id: number, program: Program): Observable<Program> {
    return this.http.put<Program>(`${this.baseUrl}/${id}`, program);
  }

  deleteProgram(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
