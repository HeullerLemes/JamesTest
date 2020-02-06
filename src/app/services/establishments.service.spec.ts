import { TestBed } from '@angular/core/testing';

import { EstablishmentsService } from './establishments.service';
import { Establishment } from '../models/Establishment';

describe('EstablishmentsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EstablishmentsService = TestBed.get(EstablishmentsService);
    service.getEstablishiments().subscribe(res => {
      expect(res.body.length).toBe(21);
    })
    service.getEstablishiment("5e34937a0433cffee602c35a").subscribe(res => {
      expect(res.body.name).toBe("Telequiet");
    })

  });
});
