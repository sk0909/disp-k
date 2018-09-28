import { TestBed, inject } from '@angular/core/testing';

import { KitchenDisplayService } from './kitchen-display.service';

describe('KitchenDisplayService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KitchenDisplayService]
    });
  });

  it('should be created', inject([KitchenDisplayService], (service: KitchenDisplayService) => {
    expect(service).toBeTruthy();
  }));
});
