import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompradoSucesso } from './comprado-sucesso';

describe('CompradoSucesso', () => {
  let component: CompradoSucesso;
  let fixture: ComponentFixture<CompradoSucesso>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompradoSucesso]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompradoSucesso);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
