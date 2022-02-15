import { Component, OnDestroy, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';

import{MediaObserver, MediaChange}from '@angular/flex-layout';
import{Subscription} from 'rxjs';

@Component({
  selector: 'app-inicial',
  templateUrl: './inicial.component.html',
  styleUrls: ['./inicial.component.css'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: {displayDefaultIndicatorType: false},
      
    },
  
  ],
})

export class InicialComponent implements OnInit, OnDestroy {

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  title ='flex-tutorial';
  mediaSub: Subscription;

 
  favoriteSeason: string;
  seasons: string[] = ['Consulta Clínica', 'Exames Laboratorias', 'Vacinas', 'Consulta Especialidades','Exame de Imagem'];
  

  constructor(private _formBuilder: FormBuilder, public mediaObserver: MediaObserver) {
 
  }


  ngOnInit() {

this.mediaSub= this.mediaObserver.media$.subscribe(
  (result: MediaChange)=>{
  console.log(result.mqAlias);
})

    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: '', 
    });
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: '',
    });
  }
  ngOnDestroy() {
    this.mediaSub.unsubscribe();
     }
}
