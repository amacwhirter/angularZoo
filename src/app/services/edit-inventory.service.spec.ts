import { TestBed, inject } from '@angular/core/testing';

import { EditInventoryService } from './edit-inventory.service';

describe('EditInventoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EditInventoryService]
    });
  });

  it('should be created', inject([EditInventoryService], (service: EditInventoryService) => {
    expect(service).toBeTruthy();
  }));
});
