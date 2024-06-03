import { Component } from '@angular/core';
import {MatDividerModule} from '@angular/material/divider';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

interface Slide {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-question',
  standalone: true,
  imports: [MatDividerModule, FormsModule, MatInputModule, MatSelectModule, MatFormFieldModule, MatSlideToggleModule],
  templateUrl: './question.component.html',
  styleUrl: './question.component.scss'
})
export class QuestionComponent {
  isRequired: boolean = true;

  slides: Slide[] = [
    {value: 'slide-0', viewValue: 'Slide 01'},
    {value: 'slide-1', viewValue: 'Slide 02'},
    {value: 'slide-2', viewValue: 'Slide 03'},
  ];

}
