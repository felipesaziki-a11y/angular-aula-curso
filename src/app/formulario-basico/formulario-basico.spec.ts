import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioBasico } from './formulario-basico';

describe('FormularioBasico', () => {
  let component: FormularioBasico;
  let fixture: ComponentFixture<FormularioBasico>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioBasico],
    }).compileComponents();

    fixture = TestBed.createComponent(FormularioBasico);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
