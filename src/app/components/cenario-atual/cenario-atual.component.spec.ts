import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CenarioAtualComponent } from './cenario-atual.component';

describe('CenarioAtualComponent', () => {
  let component: CenarioAtualComponent;
  let fixture: ComponentFixture<CenarioAtualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CenarioAtualComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CenarioAtualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
