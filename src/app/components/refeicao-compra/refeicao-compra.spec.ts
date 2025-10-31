import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefeicaoCompra } from './refeicao-compra';

describe('RefeicaoCompra', () => {
  let component: RefeicaoCompra;
  let fixture: ComponentFixture<RefeicaoCompra>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RefeicaoCompra]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RefeicaoCompra);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
