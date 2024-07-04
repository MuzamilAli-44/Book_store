import { Component, OnInit, inject } from '@angular/core';
import { HomeComponent } from '../../../components/home/home.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AddBooksService } from '../services/add-books.service';

@Component({
  selector: 'app-add-book',
  standalone: true,
  imports: [HomeComponent, CommonModule, FormsModule],
  templateUrl: './add-book.component.html',
  styleUrl: './add-book.component.scss',
})
export class AddBookComponent implements OnInit {
  name: string = '';
  author: string = '';
  category: string = '';
  rating: number = 0;

  httpClient = inject(HttpClient);

  constructor(private route: Router, private addingBook: AddBooksService) {}

  onSubmit(form: any) {
    // alert('you have registered');
    // Store the form data in local storage, make an obj
    const userData = {
      name: form.value.name,
      author: form.value.author,
      category: form.value.category,
      rating: form.value.rating,
    };

    // localStorage.setItem('userData', JSON.stringify(userData)); //json to convert obj to string because setitem takes string
    this.addingBook.Book_Add(userData).subscribe((data) => {
      console.log('data', data);
    });
  }

  togglePasswordVisibility() {}

  ngOnInit(): void {}
}
