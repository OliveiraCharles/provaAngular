import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdversarialMachineLearningComponent } from './adversarial-machine-learning.component';

describe('AdversarialMachineLearningComponent', () => {
  let component: AdversarialMachineLearningComponent;
  let fixture: ComponentFixture<AdversarialMachineLearningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdversarialMachineLearningComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdversarialMachineLearningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
