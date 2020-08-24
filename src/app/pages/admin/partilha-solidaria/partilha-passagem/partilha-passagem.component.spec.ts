import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartilhaPassagemComponent } from './partilha-passagem.component';

describe('PartilhaPassagemComponent', () => {
  let component: PartilhaPassagemComponent;
  let fixture: ComponentFixture<PartilhaPassagemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartilhaPassagemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartilhaPassagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
