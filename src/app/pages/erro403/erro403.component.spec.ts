import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Erro403Component } from './erro403.component';

describe('Erro403Component', () => {
  let component: Erro403Component;
  let fixture: ComponentFixture<Erro403Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Erro403Component ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Erro403Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
