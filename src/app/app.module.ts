import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListEstablishmentsComponent } from './components/list-establishments/list-establishments.component';
import { HttpClientModule } from '@angular/common/http';
import { EstablishmentComponent } from './components/establishment/establishment.component';
import { DetailedEstablishmentComponent } from './components/detailed-establishment/detailed-establishment.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxIndexedDBModule, DBConfig } from 'ngx-indexed-db';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { RouterModule } from '@angular/router';

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

@NgModule({
  declarations: [
    AppComponent,
    ListEstablishmentsComponent,
    EstablishmentComponent,
    DetailedEstablishmentComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    FontAwesomeModule,
    NgxIndexedDBModule.forRoot(dbConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
