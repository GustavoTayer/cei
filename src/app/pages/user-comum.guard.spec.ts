import { TestBed } from '@angular/core/testing';

import { UserComumGuard } from './user-comum.guard';

describe('UserComumGuard', () => {
  let guard: UserComumGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UserComumGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
