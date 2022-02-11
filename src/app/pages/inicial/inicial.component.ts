import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';

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

export class InicialComponent implements OnInit {

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;

 
  favoriteSeason: string;
  seasons: string[] = ['Consulta Clínica', 'Exames Laboratorias', 'Vacinas', 'Consulta Especialidades','Exame de Imagem'];
  

  constructor(private _formBuilder: FormBuilder) {
 
  }

  ngOnInit() {
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

}
