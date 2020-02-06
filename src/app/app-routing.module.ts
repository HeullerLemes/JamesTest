import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailedEstablishmentComponent } from './components/detailed-establishment/detailed-establishment.component';
import { ListEstablishmentsComponent } from './components/list-establishments/list-establishments.component';


const routes: Routes = [
  {path: '', component: ListEstablishmentsComponent},
  {path: 'establishment/:id', component: DetailedEstablishmentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
