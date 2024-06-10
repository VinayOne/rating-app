import { Component, Input } from '@angular/core';
import { MaterialModule } from '../../../modules/material/material.module';

@Component({
  selector: 'app-open-ended-quest',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './open-ended-quest.component.html',
  styleUrl: './open-ended-quest.component.scss'
})
export class OpenEndedQuestComponent {
  @Input() ratingData: any;
  ratingOptions: any;
  ratingStyle: any;
  ratingDone: boolean = false;

  questionAsked: string = '';
  ratingReceived: string = '';

  ngOnInit(): void {
    this.ratingOptions = this.ratingData[0].ratingOption;
    this.ratingStyle = this.ratingData[1].ratingStyle;
  }

  showRating(ques: string, ratingSelcted: string) {
    this.questionAsked = ques;
    this.ratingReceived = ratingSelcted;
    this.ratingDone = true;
  }

}
