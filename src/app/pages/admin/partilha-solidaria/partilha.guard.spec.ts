import { TestBed } from '@angular/core/testing';

import { PartilhaGuard } from './partilha.guard';

describe('PartilhaGuard', () => {
  let guard: PartilhaGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PartilhaGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
