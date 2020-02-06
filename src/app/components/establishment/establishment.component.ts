import { Component, OnInit, Input } from '@angular/core';
import { Establishment } from 'src/app/models/Establishment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-establishment',
  templateUrl: './establishment.component.html',
  styleUrls: ['./establishment.component.scss']
})
export class EstablishmentComponent implements OnInit {

  constructor(private router: Router) { }

  @Input() establishment: Establishment;

  ngOnInit() {
  }

  navigateDetailedEstablishment(id: string){
    this.router.navigate(['establishment', id]);
  }

}
