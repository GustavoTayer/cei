import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaSolicitacaoDesktopComponent } from './lista-solicitacao-desktop.component';

describe('ListaSolicitacaoDesktopComponent', () => {
  let component: ListaSolicitacaoDesktopComponent;
  let fixture: ComponentFixture<ListaSolicitacaoDesktopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaSolicitacaoDesktopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaSolicitacaoDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
