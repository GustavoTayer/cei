import { TestBed } from '@angular/core/testing';

import { UsuarioGestaoGuard } from './usuario-gestao.guard';

describe('UsuarioGestaoGuard', () => {
  let guard: UsuarioGestaoGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UsuarioGestaoGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
