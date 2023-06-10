import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable, retry } from 'rxjs';
import { environments } from 'src/environments/environments';
import { SignupUserRequest } from 'src/models/interfaces/user/SignupUserRequest';
import { SignupUserResponse } from 'src/models/interfaces/user/SignupUserResponse';
import { AuthRequest } from 'src/models/interfaces/user/auth/AuthRequest';
import { AuthResponse } from 'src/models/interfaces/user/auth/AuthResponse';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private API_URL = environments.API_URL;

  constructor(private http: HttpClient, private cookie: CookieService) { }

  signupUser(requestDatas:  SignupUserRequest): Observable<SignupUserResponse> {
    return this.http.post<SignupUserResponse>(`${this.API_URL}/user`, requestDatas )};


  authUser(requestDatas: AuthRequest): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.API_URL}/auth`, requestDatas);
  }

  isLoggedIn(): boolean{
    const JWT_TOKEN = this.cookie.get('USER_INFO');
    return JWT_TOKEN ?  true : false;
  }
}
