import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosRecentesComponent } from './dados-recentes.component';

describe('DadosRecentesComponent', () => {
  let component: DadosRecentesComponent;
  let fixture: ComponentFixture<DadosRecentesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DadosRecentesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DadosRecentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
