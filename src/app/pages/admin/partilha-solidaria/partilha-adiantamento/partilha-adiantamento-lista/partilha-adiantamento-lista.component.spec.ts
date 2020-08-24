import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartilhaAdiantamentoListaComponent } from './partilha-adiantamento-lista.component';

describe('PartilhaAdiantamentoListaComponent', () => {
  let component: PartilhaAdiantamentoListaComponent;
  let fixture: ComponentFixture<PartilhaAdiantamentoListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartilhaAdiantamentoListaComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartilhaAdiantamentoListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
