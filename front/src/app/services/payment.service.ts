import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  private apiUrl = 'http://localhost:5000/api/students';

  constructor(private http: HttpClient) {}

  getstudents(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}





