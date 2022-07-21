import { TestBed } from '@angular/core/testing';

import { MyTitleStrategyService } from './my-title-strategy.service';

describe('MyTitleStrategyService', () => {
  let service: MyTitleStrategyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyTitleStrategyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
