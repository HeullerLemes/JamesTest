import { Component, OnInit } from '@angular/core';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { EstablishmentsService } from './services/establishments.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private establishmentsService: EstablishmentsService, private dbService: NgxIndexedDBService){}

  async ngOnInit() {
    try{
      let establishments = await this.dbService.getAll('establishment');
      if(establishments.length == 0){
       let response = await this.establishmentsService.getEstablishiments().toPromise();
       for(let establishment of response.body){
        this.dbService.add('establishment',{id: establishment.id, guid: establishment.guid, 
          picture: establishment.picture, name: establishment.name, email: establishment.email, phone: establishment.phone,
          address: establishment.address, registered: establishment.registered, latitude: establishment.latitude, longitude: establishment.longitude}).then(
            res => {
               console.log(res);
            },
            error => {
                console.log(error);
            }
        );;
       }
      }
      console.log(establishments);
    }catch(error){
      console.log(error);
    }
  }

}
