import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendidoSucesso } from './vendido-sucesso';

describe('VendidoSucesso', () => {
  let component: VendidoSucesso;
  let fixture: ComponentFixture<VendidoSucesso>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VendidoSucesso]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VendidoSucesso);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
