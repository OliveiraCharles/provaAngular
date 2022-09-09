import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SegurancaCorporativaComponent } from './seguranca-corporativa.component';

describe('SegurancaCorporativaComponent', () => {
  let component: SegurancaCorporativaComponent;
  let fixture: ComponentFixture<SegurancaCorporativaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SegurancaCorporativaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SegurancaCorporativaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
