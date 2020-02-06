import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedEstablishmentComponent } from './detailed-establishment.component';

describe('DetailedEstablishmentComponent', () => {
  let component: DetailedEstablishmentComponent;
  let fixture: ComponentFixture<DetailedEstablishmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailedEstablishmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailedEstablishmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
