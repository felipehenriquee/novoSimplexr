import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import  jwt_decode from 'jwt-decode';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  async login(user: any){
    
    const result = await this.http.post<any>(`${environment.api}/auth/login`, user).toPromise();
    if (result && result.access_token){
      
      window.localStorage.setItem('token', result.access_token);
      
      return result.access_token;
    }
    return false;
  }

  getAuthorizationToken(){
    const token = window.localStorage.getItem('token');
    return token;
  }
  getTokenExpirationDate(token: string): Date {
    const decoded: any = jwt_decode(token);
    
    // if (decoded.exp === undefined) {
    //   return undefined;
    // }

    const date = new Date(0);
    date.setUTCSeconds(decoded.exp);
    return date;
  }

  isTokenExpired(token?: string): boolean {
    if (!token) {
      return true;
    }

    const date = this.getTokenExpirationDate(token);
    if (date === undefined) {
      return false;
    }

    return !(date.valueOf() > new Date().valueOf());
  }
  isUserLoggedIn() {
    const token = this.getAuthorizationToken();
    if (!token) {
      return false;
    } 
    // else if (this.isTokenExpired(token)) {
    //   return false;
    // }

    return true;
  }
  getInfoUser(token: any){
    const result = jwt_decode(token);
    return result;
  }
}
