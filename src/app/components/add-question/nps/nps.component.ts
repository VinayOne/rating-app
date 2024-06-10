import { Component, Input } from '@angular/core';
import { FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../../modules/material/material.module';

@Component({
  selector: 'app-nps',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, MaterialModule],
  templateUrl: './nps.component.html',
  styleUrl: './nps.component.scss'
})
export class NpsComponent {
  @Input() ratingData: any;
  questionFormControl = new FormControl({ value: 'On scale of 0-10, how likley are you to recommend our business to a friend?', disabled: true });

  ratingOptions: any;
  ratingStyle: any;
  ratingDone: boolean = false;
  questionAsked: string = '';
  ratingReceived: string = '';

  ngOnInit(): void {
    this.ratingOptions = this.ratingData[0].ratingOption;
    this.ratingStyle = this.ratingData[1].ratingStyle;
  }

  showRating(ratingSelcted: string) {
    //this.questionAsked = ques;
    this.ratingReceived = ratingSelcted;
    this.ratingDone = true;
  }

}
