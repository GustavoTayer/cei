import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarSolicitacaoComponent } from './criar-solicitacao.component';

describe('CriarSolicitacaoComponent', () => {
  let component: CriarSolicitacaoComponent;
  let fixture: ComponentFixture<CriarSolicitacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CriarSolicitacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CriarSolicitacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
