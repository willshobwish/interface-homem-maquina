import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefeicaoVenda } from './refeicao-venda';

describe('RefeicaoVenda', () => {
  let component: RefeicaoVenda;
  let fixture: ComponentFixture<RefeicaoVenda>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RefeicaoVenda]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RefeicaoVenda);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
