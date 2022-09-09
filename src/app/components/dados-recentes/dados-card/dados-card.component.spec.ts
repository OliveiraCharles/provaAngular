import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosCardComponent } from './dados-card.component';

describe('DadosCardComponent', () => {
  let component: DadosCardComponent;
  let fixture: ComponentFixture<DadosCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DadosCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DadosCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
