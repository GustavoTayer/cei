import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogShowComponentComponent } from './dialog-show-component.component';

describe('DialogShowComponentComponent', () => {
  let component: DialogShowComponentComponent;
  let fixture: ComponentFixture<DialogShowComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogShowComponentComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogShowComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
