import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, tap , map , BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //private apiUrl = '/api/auth'; // URL de l'API Spring Boot
  private baseUrl = 'http://localhost:5000/api';
  private currentemail = new BehaviorSubject<string | null>(null);

      constructor(private http: HttpClient, private router: Router) { }
      
      register(user: any): Observable<any> {
        return this.http.post(`${this.baseUrl}/auth/register-user`, user);
      }
      
      /*  login(email: string, password: string): Observable<{ token: string }> {
          return this.http.post<{ token: string }>(`${this.baseUrl}/login`, { email, password }).pipe(
            tap(response => {
              if (response.token) {
                localStorage.setItem('authToken', response.token);
                console.log("Token stored successfully");
              } else {
                console.error("No token received in the response");
              }
            })
          );
        }*/
         login(email: string, password: string): Observable<any> {
  return this.http.post<any>(`${this.baseUrl}/auth/login-user`, { email, password }).pipe(
    map(response => {
      if (response.accessToken && response.tokenType) {
        const token = `${response.tokenType.trim()} ${response.accessToken.trim()}`; // Correctly format token
        localStorage.setItem('authToken', token);
        console.log("Token stored successfully");
        console.log(token);
        this.currentemail.next(email);
      }
      return response;
    })
  );
}

getemail(): Observable<string | null> {
  console.log(this.currentemail);
  return this.currentemail.asObservable();
}
      
          
          
          makeAuthenticatedRequest() {
            console.log('Calling makeAuthenticatedRequest');
            const token = this.getToken();
            console.log('Retrieved Token in makeAuthenticatedRequest:', token);
            const headers = new HttpHeaders({
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json' 
            });
        
            return this.http.get(`${this.baseUrl}/some-protected-route`, { headers });
          }
           
    
  logout(): void {
    localStorage.removeItem('authToken'); 
    this.router.navigate(['/login']); 
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('authToken'); 
  }

    getToken(): string | null {
      const token = localStorage.getItem('authToken');
      console.log('Retrieved Token:', token);
      if (token && token.startsWith('Bearer ')) {
        return token.substring(7).trim(); 
      }
      return token;
    }
    
    private getAuthHeaders(): HttpHeaders {
      const token = this.getToken();
            
            const headers = new HttpHeaders({
              'Authorization': `Bearer ${token}`.trim()
            });
      return headers;
    }
    


    
}
