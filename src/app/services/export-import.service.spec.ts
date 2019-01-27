import { TestBed } from '@angular/core/testing';

import { ExportImportService } from './export-import.service';

describe('ExportImportService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExportImportService = TestBed.get(ExportImportService);
    expect(service).toBeTruthy();
  });
});
