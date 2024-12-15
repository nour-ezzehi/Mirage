import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Child } from '../interfaces/child';
import { of } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class ChildService {
  private baseUrl = 'http://localhost:3000/children'; // URL de l'API
  /*constructor() { }

  // Simuler des données de l'API
  getChildren(): Observable<Child[]> {
    const mockChildren: Child[] = [
      { id: 1, name: 'Alice', age: 5, class: 'Kindergarten', groupId: 101 },
    { id: 2, name: 'Bob', age: 6, class: '1st Grade', groupId: 102 },
    { id: 3, name: 'Charlie', age: 7, class: '2nd Grade', groupId: 103 }
    ];
    return of(mockChildren);  // Retourne les données sous forme d'Observable
  }}*/
  constructor(private http: HttpClient) {}

  // Obtenir la liste des enfants
  getChildren(): Observable<Child[]> {
    return this.http.get<Child[]>(this.baseUrl);
  }

  // Obtenir un enfant par son ID
  getChildById(id: number): Observable<Child> {
    return this.http.get<Child>(`${this.baseUrl}/${id}`);
  }

  // Ajouter un nouvel enfant
  addChild(child: Child): Observable<Child> {
    return this.http.post<Child>(this.baseUrl, child);
  }

  // Mettre à jour un enfant
  updateChild(id: number, child: Child): Observable<Child> {
    return this.http.put<Child>(`${this.baseUrl}/${id}`, child);
  }

  // Supprimer un enfant
  deleteChild(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
