import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenEndedQuestComponent } from './open-ended-quest.component';

describe('OpenEndedQuestComponent', () => {
  let component: OpenEndedQuestComponent;
  let fixture: ComponentFixture<OpenEndedQuestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OpenEndedQuestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OpenEndedQuestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
