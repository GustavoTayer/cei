import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartilhaAdiantamentoEditarComponent } from './partilha-adiantamento-editar.component';

describe('PartilhaAdiantamentoEditarComponent', () => {
  let component: PartilhaAdiantamentoEditarComponent;
  let fixture: ComponentFixture<PartilhaAdiantamentoEditarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartilhaAdiantamentoEditarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartilhaAdiantamentoEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
