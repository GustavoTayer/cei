import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinhasEscalasComponent } from './minhas-escalas.component';

describe('MinhasEscalasComponent', () => {
  let component: MinhasEscalasComponent;
  let fixture: ComponentFixture<MinhasEscalasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinhasEscalasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinhasEscalasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
