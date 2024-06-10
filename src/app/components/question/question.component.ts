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
  rateSelected = 'slider';
  ratingData: any;

  ratings: Rating[] = [
    {value: 'slider', viewValue: 'Slider'},
    {value: 'smiley', viewValue: 'Smiley'}
  ];

  ratingOptions_5 = [
    {smiley: '😀', num: 4, ratingValue: 'Strongly Agree'},
    {smiley: '😊', num: 3, ratingValue: 'Agree'},
    {smiley: '😐', num: 2, ratingValue: 'Neutral'},
    {smiley: '😟', num: 1, ratingValue: 'Disagree'},
    {smiley: '😠', num: 0, ratingValue: 'Strongly Disagree'}
  ]

  ratingOptions_4 = [
    {smiley: '😀', num: 4, ratingValue: 'Excellent'},
    {smiley: '😊', num: 3, ratingValue: 'Good'},
    {smiley: '😐', num: 2, ratingValue: 'Fair'},
    {smiley: '😟', num: 1, ratingValue: 'Poor'}
  ]

  ratingOptions_10 = [
    {smiley: '😀', num: 10, ratingValue: 'Most Likely'},
    {smiley: '😟', num: 1, ratingValue: 'Least Likely'}
  ]

 ratingOptions = this.ratingOptions_5;

  constructor() {}

 setRating(b:string) {
  if(b ==='5') {
    this.ratingOptions = this.ratingOptions_5;
  } else if(b === '4') {
    this.ratingOptions = this.ratingOptions_4;
  } else if(b === '10') {
    this.ratingOptions = this.ratingOptions_10;
  }

 }

 setRatingData() {
  this.ratingData = [
    {ratingOption: this.ratingOptions},
    {ratingStyle: this.rateSelected}
  ];
  this.addQuestion = true;
 }

}
