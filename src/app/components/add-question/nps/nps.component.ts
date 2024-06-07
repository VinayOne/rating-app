import { Component } from '@angular/core';
import {FormControl, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MaterialModule } from '../../../modules/material/material.module';

@Component({
  selector: 'app-nps',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, MaterialModule],
  templateUrl: './nps.component.html',
  styleUrl: './nps.component.scss'
})
export class NpsComponent {
 questionFormControl = new FormControl({value:'On scale of 0-10, how likley are you to recommend our business to a friend?', disabled: true});

}
