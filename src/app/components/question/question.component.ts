import { Component } from '@angular/core';
import { MaterialModule } from '../../modules/material/material.module';
import { AddQuestionComponent } from '../add-question/add-question.component';

interface Rating {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-question',
  standalone: true,
  imports: [MaterialModule, AddQuestionComponent],
  templateUrl: './question.component.html',
  styleUrl: './question.component.scss'
})
export class QuestionComponent {
  isRequired: boolean = true;
  addQuestion: boolean = false;

  ratings: Rating[] = [
    {value: 'slider', viewValue: 'Slider'},
    {value: 'smiley', viewValue: 'Smiley'}
  ];

  constructor() {}



}
