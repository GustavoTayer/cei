import { TestBed } from '@angular/core/testing';

import { SolicitacaoGuard } from './solicitacao.guard';

describe('SolicitacaoGuard', () => {
  let guard: SolicitacaoGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SolicitacaoGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
