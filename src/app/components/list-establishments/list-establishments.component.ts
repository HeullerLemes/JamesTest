import { Component, OnInit } from '@angular/core';
import { EstablishmentsService } from 'src/app/services/establishments.service';
import { Establishment } from 'src/app/models/Establishment';
import { NgxIndexedDBService } from 'ngx-indexed-db';

@Component({
  selector: 'app-list-establishments',
  templateUrl: './list-establishments.component.html',
  styleUrls: ['./list-establishments.component.scss']
})
export class ListEstablishmentsComponent implements OnInit {

  constructor(private dbService: NgxIndexedDBService) { }

  establishments: Array<Establishment> = new Array<Establishment>();

  ngOnInit() {
    this.dbService.getAll('establishment').then((res: Array<Establishment>) =>  this.establishments = res)
  }



}
