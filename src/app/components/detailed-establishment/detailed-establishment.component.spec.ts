import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedEstablishmentComponent } from './detailed-establishment.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DBConfig, NgxIndexedDBModule } from 'ngx-indexed-db';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('DetailedEstablishmentComponent', () => {
  let component: DetailedEstablishmentComponent;
  let fixture: ComponentFixture<DetailedEstablishmentComponent>;

  const dbConfig: DBConfig  = {
    name: 'Establishments',
    version: 1,
    objectStoresMeta: [{
      store: 'establishment',
      storeConfig: { keyPath: 'id', autoIncrement: false },
      storeSchema: [
        { name: 'name', keypath: 'name', options: { unique: false } },
        { name: 'guid', keypath: 'guid', options: { unique: false } },
        { name: 'picture', keypath: 'picture', options: { unique: false } },
        { name: 'email', keypath: 'email', options: { unique: true } },
        { name: 'phone', keypath: 'phone', options: { unique: false } },
        { name: 'address', keypath: 'address', options: { unique: false } },
        { name: 'registered', keypath: 'registered', options: { unique: false } },
        { name: 'latitude', keypath: 'latitude', options: { unique: false } },
        { name: 'latitude', keypath: 'latitude', options: { unique: false } }
      ]
    }]
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailedEstablishmentComponent ],
      imports: [ReactiveFormsModule, 
        FontAwesomeModule, 
        RouterTestingModule,
        RouterModule,
        NgxIndexedDBModule.forRoot(dbConfig)]
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
