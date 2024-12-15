import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProgramService {
private apiUrl = 'http://localhost:5000/api/programs';

  constructor(private http: HttpClient) {}

  getprograms(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
  createProgram(program: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, program);
  }

  updateProgram(id: string, program: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, program);
  }

  deleteProgram(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
