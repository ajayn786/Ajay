import { TestBed } from '@angular/core/testing';

import { EngService } from './eng.service';

describe('EngService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EngService = TestBed.get(EngService);
    expect(service).toBeTruthy();
  });
});
