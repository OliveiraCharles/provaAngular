import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FerramentasDeDefesaComponent } from './ferramentas-de-defesa.component';

describe('FerramentasDeDefesaComponent', () => {
  let component: FerramentasDeDefesaComponent;
  let fixture: ComponentFixture<FerramentasDeDefesaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FerramentasDeDefesaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FerramentasDeDefesaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
