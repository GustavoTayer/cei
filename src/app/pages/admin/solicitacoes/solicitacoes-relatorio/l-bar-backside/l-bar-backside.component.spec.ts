import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LBarBacksideComponent } from './l-bar-backside.component';

describe('LBarBacksideComponent', () => {
  let component: LBarBacksideComponent;
  let fixture: ComponentFixture<LBarBacksideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LBarBacksideComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LBarBacksideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
