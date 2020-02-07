import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstablishmentComponent } from './establishment.component';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('EstablishmentComponent', () => {
  let component: EstablishmentComponent;
  let fixture: ComponentFixture<EstablishmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EstablishmentComponent],
      imports: [
        RouterModule,
        RouterTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstablishmentComponent);
    component = fixture.componentInstance;
    component.establishment =
    {
      id: "5e34937af59dabb9a2c4c05f",
      index: 0,
      guid: "7d35ec3a-1462-49cc-adec-1726f98862e1",
      picture: "http://placehold.it/32x32",
      name: "Gink",
      email: "contato@gink.com",
      phone: "+1 (859) 505-2620",
      address: "808 Ford Street, Westerville, Nevada, 6937",
      registered: "Sunday, September 18, 2016 10:04 AM",
      latitude: "37.849767",
      longitude: "-58.807759"
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
