import { TestBed } from '@angular/core/testing';

import { ProdutoGuard } from './produto.guard';

describe('ProdutoGuard', () => {
  let guard: ProdutoGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ProdutoGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
