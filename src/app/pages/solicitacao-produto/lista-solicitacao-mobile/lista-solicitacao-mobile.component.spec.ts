import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaSolicitacaoMobileComponent } from './lista-solicitacao-mobile.component';

describe('ListaSolicitacaoMobileComponent', () => {
  let component: ListaSolicitacaoMobileComponent;
  let fixture: ComponentFixture<ListaSolicitacaoMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaSolicitacaoMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaSolicitacaoMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
