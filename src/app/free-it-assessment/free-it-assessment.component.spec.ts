import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeItAssessmentComponent } from './free-it-assessment.component';

describe('FreeItAssessmentComponent', () => {
  let component: FreeItAssessmentComponent;
  let fixture: ComponentFixture<FreeItAssessmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreeItAssessmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreeItAssessmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
