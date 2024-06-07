import { Component, Inject } from '@angular/core';
import { MaterialModule } from '../../modules/material/material.module';
import { OpenEndedQuestComponent } from './open-ended-quest/open-ended-quest.component';
import { MultipleChoiceQuestComponent } from './multiple-choice-quest/multiple-choice-quest.component';
import { SingleChoiceQuestComponent } from './single-choice-quest/single-choice-quest.component';
import { NpsComponent } from './nps/nps.component';


export interface DialogData {
  animal: string;
  name: string;
}

export interface QuesType {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-add-question',
  standalone: true,
  imports: [
    MaterialModule, 
    OpenEndedQuestComponent,
    MultipleChoiceQuestComponent,
    SingleChoiceQuestComponent,
    NpsComponent
  ],
  templateUrl: './add-question.component.html',
  styleUrl: './add-question.component.scss'
})
export class AddQuestionComponent {
  selected = 'openQues';

  quesTypes: QuesType[] = [
    {value: 'openQues', viewValue: 'Open Ended Question'},
    {value: 'singleChoice', viewValue: 'Single Choice Question'},
    {value: 'multipleChoice', viewValue: 'Multiple Choice Question'},
    {value: 'nps', viewValue: 'NPS'}
  ];


}
