import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LBarComponent } from './l-bar.component';

describe('LBarComponent', () => {
  let component: LBarComponent;
  let fixture: ComponentFixture<LBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LBarComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
