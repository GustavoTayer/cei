import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioConvidarComponent } from './usuario-convidar.component';

describe('UsuarioConvidarComponent', () => {
  let component: UsuarioConvidarComponent;
  let fixture: ComponentFixture<UsuarioConvidarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuarioConvidarComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioConvidarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
