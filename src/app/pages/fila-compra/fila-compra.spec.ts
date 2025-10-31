import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilaCompra } from './fila-compra';

describe('FilaCompra', () => {
  let component: FilaCompra;
  let fixture: ComponentFixture<FilaCompra>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilaCompra]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilaCompra);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
