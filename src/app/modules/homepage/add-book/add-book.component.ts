import { Component, OnInit, inject } from '@angular/core';
import { HomeComponent } from '../../../components/home/home.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-book',
  standalone: true,
  imports: [HomeComponent, CommonModule, FormsModule],
  templateUrl: './add-book.component.html',
  styleUrl: './add-book.component.scss'
})

export class AddBookComponent implements OnInit{
  name: string='';
  author: string='';
  category: string='';
  rating: number=0;
  hidePassword:boolean=true;
  httpClient= inject(HttpClient);

  constructor() {
    // registerations.loggedin().subscribe((data)=>{
    //   console.warn("data",data);
    // });
    
  }

  onSubmit(form: any) {
      // alert('you have registered');
    // Store the form data in local storage, make an obj
    const userData = {
      username: form.value.name,
      email: form.value.email,
      password: form.value.password
    };

    // localStorage.setItem('userData', JSON.stringify(userData)); //json to convert obj to string because setitem takes string 
    

  }

  togglePasswordVisibility() {
    this.hidePassword = !this.hidePassword;
  }
  ngOnInit(): void {
   
}
}
