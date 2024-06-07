import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleChoiceQuestComponent } from './single-choice-quest.component';

describe('SingleChoiceQuestComponent', () => {
  let component: SingleChoiceQuestComponent;
  let fixture: ComponentFixture<SingleChoiceQuestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleChoiceQuestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SingleChoiceQuestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
