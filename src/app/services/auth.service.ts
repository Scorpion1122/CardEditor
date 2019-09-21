import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { environment } from './../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loginUrl = '/v1/auth/login';
  logoutUrl = '/v1/auth/logout';

  authToken: string;
  googleUser: any;

  private loginSubject = new Subject();
  private logoutSubject = new Subject();

  constructor(private http: HttpClient) { }

  googleLoginDetected(googleUser: any) {
    const newAuthToken = googleUser.getAuthResponse().id_token;
    if (this.googleUser !== null && newAuthToken !== this.authToken) {
      // logout first
    }

    const url = environment.apiUrl + this.loginUrl;
    const json = JSON.stringify({'auth_token': newAuthToken});

    this.http.post(url, json, environment.httpOptions)
      .subscribe(
        (data) => {
          console.log(data);
          this.authToken = newAuthToken;
          this.googleUser = googleUser;
          this.loginSubject.next();
        },
        error => {
          console.log(error);
        });
  }

  getOnLogin(): Observable<any> {
    return this.loginSubject.asObservable();
  }

  getOnLogout(): Observable<any> {
    return this.logoutSubject.asObservable();
  }
}
