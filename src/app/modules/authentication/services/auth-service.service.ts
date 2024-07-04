import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isLogged: boolean = false;
  url= "https://50c0-14-192-136-180.ngrok-free.app/auth/register";
  loginURL="https://50c0-14-192-136-180.ngrok-free.app/auth/login";

  constructor(private http:HttpClient){}

  login(email: string, password: string): boolean {
    const storedUserData = localStorage.getItem('userData');
    if (storedUserData) {
      const userData = JSON.parse(storedUserData);
      if (email === userData.email && password === userData.password) {
        this.isLogged = true;
        return this.isLogged;
      }
    }
    return false;
  }

  logout(): void {
    const storedUserData = localStorage.getItem('userData');
    this.isLogged = false;
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('userData');
  }
  Registered(payload:{
    username:string,
    email:string,
    password:string
  }){
    return this.http.post(this.url,{ //use post to store data in db, entered in form by user 
      username:payload.username,
      email:payload.email,
      password:payload.password
    });
  }

  loggedin(payload:{
    username:string,
    password:string
  }){
    return this.http.post(this.loginURL,{ //use post to store data in db, entered in form by user 
      username:payload.username,
      password:payload.password
    });
  }
}
