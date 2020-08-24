import { TestBed } from '@angular/core/testing';

import { RelatorioGuard } from './relatorio.guard';

describe('RelatorioGuard', () => {
  let guard: RelatorioGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(RelatorioGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
