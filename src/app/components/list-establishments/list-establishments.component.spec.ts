import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ListEstablishmentsComponent } from './list-establishments.component';
import { EstablishmentComponent } from '../establishment/establishment.component';
import { RouterModule } from '@angular/router';
import { DBConfig, NgxIndexedDBModule } from 'ngx-indexed-db';

describe('ListEstablishmentsComponent', () => {
  let component: ListEstablishmentsComponent;
  let fixture: ComponentFixture<ListEstablishmentsComponent>;

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
      declarations: [ EstablishmentComponent, ListEstablishmentsComponent ],
      imports: [
        RouterModule,
        NgxIndexedDBModule.forRoot(dbConfig)
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListEstablishmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
