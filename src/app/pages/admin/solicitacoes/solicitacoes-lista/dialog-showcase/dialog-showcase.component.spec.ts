import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogShowcaseComponent } from './dialog-showcase.component';

describe('DialogShowcaseComponent', () => {
  let component: DialogShowcaseComponent;
  let fixture: ComponentFixture<DialogShowcaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogShowcaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
