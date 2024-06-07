import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleChoiceQuestComponent } from './multiple-choice-quest.component';

describe('MultipleChoiceQuestComponent', () => {
  let component: MultipleChoiceQuestComponent;
  let fixture: ComponentFixture<MultipleChoiceQuestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MultipleChoiceQuestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MultipleChoiceQuestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
