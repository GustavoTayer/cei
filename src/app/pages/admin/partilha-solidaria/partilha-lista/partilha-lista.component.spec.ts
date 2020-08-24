import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartilhaListaComponent } from './partilha-lista.component';

describe('PartilhaListaComponent', () => {
  let component: PartilhaListaComponent;
  let fixture: ComponentFixture<PartilhaListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartilhaListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartilhaListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
