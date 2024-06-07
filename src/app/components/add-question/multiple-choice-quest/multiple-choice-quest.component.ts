import { Component } from '@angular/core';
import {FormBuilder, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule, JsonPipe} from '@angular/common';
import {MatCheckboxModule} from '@angular/material/checkbox';

@Component({
  selector: 'app-multiple-choice-quest',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MatCheckboxModule, JsonPipe],
  templateUrl: './multiple-choice-quest.component.html',
  styleUrl: './multiple-choice-quest.component.scss'
})
export class MultipleChoiceQuestComponent {
  questions = this._formBuilder.group({
    question_1: false,
    question_2: false,
    question_3: false,
    question_4: false,
  });

  constructor(private _formBuilder: FormBuilder) {}

}
