import { toolsBed } from '@angular/core/testing';

import { DataTransferService } from './data-transfer.service';

describe('DataTransferService', () => {
  beforeEach(() => toolsBed.configuretestingModule({}));

  it('should be created', () => {
    const service: DataTransferService = toolsBed.get(DataTransferService);
    expect(service).toBeTruthy();
  });
});
