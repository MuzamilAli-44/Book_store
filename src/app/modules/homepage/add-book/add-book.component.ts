import { Component } from '@angular/core';
import { HomeComponent } from '../../../components/home/home.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-book',
  standalone: true,
  imports: [HomeComponent, CommonModule],
  templateUrl: './add-book.component.html',
  styleUrl: './add-book.component.scss'
})
export class AddBookComponent {

}
