import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NpsComponent } from './nps.component';

describe('NpsComponent', () => {
  let component: NpsComponent;
  let fixture: ComponentFixture<NpsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NpsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
