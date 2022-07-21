import { TestBed } from '@angular/core/testing';

import { MyTitleResolver } from './my-title.resolver';

describe('MyTitleResolver', () => {
  let resolver: MyTitleResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(MyTitleResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
