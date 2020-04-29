import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitacoesRelatorioComponent } from './solicitacoes-relatorio.component';

describe('SolicitacoesRelatorioComponent', () => {
  let component: SolicitacoesRelatorioComponent;
  let fixture: ComponentFixture<SolicitacoesRelatorioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolicitacoesRelatorioComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitacoesRelatorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
