import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EstablishmentsService } from 'src/app/services/establishments.service';
import { Establishment } from 'src/app/models/Establishment';
import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-detailed-establishment',
  templateUrl: './detailed-establishment.component.html',
  styleUrls: ['./detailed-establishment.component.scss']
})
export class DetailedEstablishmentComponent implements OnInit {

  constructor(private fb: FormBuilder, private dbService: NgxIndexedDBService, private activeRoute: ActivatedRoute, private router: Router) { }

  establishmentForm: FormGroup;
  establishment: Establishment;
  faLongArrowAltLeft = faLongArrowAltLeft;
  loaded: boolean = false;

  ngOnInit() {
    console.log(this.activeRoute.snapshot.paramMap.get('id'));
    this.dbService.getByKey('establishment', this.activeRoute.snapshot.paramMap.get('id')).then((res: Establishment) => {
      this.establishment = res;
      this.initForm(this.establishment);
      this.loaded = true;
    },
      error => {
        console.log(error);
        this.navigateBack();
      })
  }

  initForm(establishment: Establishment) {
    this.establishmentForm = this.fb.group({
      name: [
        establishment.name,
        Validators.required],
      email: [
        establishment.email,
        [Validators.required,
        Validators.email]],
      phone: [
        establishment.phone,
        Validators.required
      ],
      address: [
        establishment.address,
        Validators.required
      ],
      latitude: [
        establishment.latitude,
        [Validators.required,
        Validators.maxLength(32),
        Validators.min(-90),
        Validators.max(90),
        Validators.pattern(/\-?\d*\.?\d{1,2}/)]
      ],
      longitude: [
        establishment.longitude,
        [Validators.required,
          Validators.maxLength(32),
          Validators.min(-180),
          Validators.max(180),
          Validators.pattern(/\-?\d*\.?\d{1,2}/)]
      ]
    });
  }

  navigateBack() {
    this.router.navigate(['/']);
  }

  updateEstablishment() {
    if (this.establishmentForm.valid) {
      this.dbService.update('establishment', 
      {
        id: this.establishment.id,
        name: this.establishmentForm.value.name, 
        email: this.establishmentForm.value.email,
        phone: this.establishmentForm.value.phone,
        address: this.establishmentForm.value.address,
        latitude: this.establishmentForm.value.latitude,
        longitude: this.establishmentForm.value.longitude,
        picture: this.establishment.picture
      }).then(() => {
        this.navigateBack();
      },
        error => {
          console.log(error);
        })
    }
  }
}
