import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListVendaSeminaristaComponent } from './list-venda-seminarista.component';

describe('ListVendaSeminaristaComponent', () => {
  let component: ListVendaSeminaristaComponent;
  let fixture: ComponentFixture<ListVendaSeminaristaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListVendaSeminaristaComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListVendaSeminaristaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
