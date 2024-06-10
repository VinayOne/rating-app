import { Component, OnInit, Input } from '@angular/core';
import { MaterialModule } from '../../../modules/material/material.module';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-single-choice-quest',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './single-choice-quest.component.html',
  styleUrl: './single-choice-quest.component.scss'
})
export class SingleChoiceQuestComponent implements OnInit {
  @Input() ratingData: any;
  selectedQuestion: string = '';
  questions: string[] = ['Question 1', 'Question 2', 'Question 3', 'Question 4'];
  newQuestion: string[] = ['Question 1', 'Question 2', 'Question 3', 'Question 4'];
  quesIndex: number = 0;

  ratingOptions: any;
  ratingStyle: any;
  ratingDone: boolean = false;

  questionAsked: string = '';
  ratingReceived: string = '';


  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    this.ratingOptions = this.ratingData[0].ratingOption;
    this.ratingStyle = this.ratingData[1].ratingStyle;
  }

  openDialog(index: any): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: { newQuestion: this.newQuestion, quesIndex: index },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      this.questions[result.quesIndex] = result.newQuestion[result.quesIndex];
    });
  }

  deleteQuestion(inx: number) {
    this.questions.splice(inx, 1);
    this.newQuestion.splice(inx, 1);
  }

  showRating(ques: string, ratingSelcted: string) {
    this.questionAsked = ques;
    this.ratingReceived = ratingSelcted;
    this.ratingDone = true;
  }



}
