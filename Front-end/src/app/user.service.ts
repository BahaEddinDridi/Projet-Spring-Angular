import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private token: string;

  constructor(private http: HttpClient) {}

  registerUser(user:User):Observable<User> {
    
    return this.http.post<User>("http://localhost:8080/mon-application/auth/addNewUser", user);
  }
  login(name: string, password: string) {
    const authRequest = { name, password };
    return this.http.post('http://localhost:8080/mon-application/auth/generateToken', authRequest, { responseType: 'json' });
  }
  setToken(token: string): void {
    this.token = token;
    // Optionally, you can save the token to localStorage or other storage mechanisms
    // localStorage.setItem('token', token);
  }
  getToken(): string {
    return this.token;
    // Optionally, you can retrieve the token from localStorage or other storage mechanisms
    // return localStorage.getItem('token');
  }
  /* loginUser(authRequest: any): Observable<any> {
    return this.http.post<any>("http://localhost:8080/auth/generateToken", authRequest);
  } 
   // New method for fetching user profile
   getUserProfile(token: string, isAdmin: boolean): Observable<User> {
    const profileEndpoint = isAdmin
      ? "http://localhost:8080/auth/admin/adminProfile"
      : "http://localhost:8080/auth/user/userProfile";

    const headers = { Authorization: 'Bearer ' + token };
    return this.http.get<User>(profileEndpoint, { headers, responseType: 'json' });
  }
  isAdminRole(roles: string): boolean {
    // Modify this based on your actual role checking logic
    return roles === 'ROLE_ADMIN' || roles === 'ROLE_USER';
  } */
  }
