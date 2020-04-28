import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogShowSolMobileComponent } from './dialog-show-sol-mobile.component';

describe('DialogShowSolMobileComponent', () => {
  let component: DialogShowSolMobileComponent;
  let fixture: ComponentFixture<DialogShowSolMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogShowSolMobileComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogShowSolMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
