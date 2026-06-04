import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoaVindas } from './boa-vindas';

describe('BoaVindas', () => {
  let component: BoaVindas;
  let fixture: ComponentFixture<BoaVindas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoaVindas],
    }).compileComponents();

    fixture = TestBed.createComponent(BoaVindas);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
