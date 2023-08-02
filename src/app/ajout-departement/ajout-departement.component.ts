import { Router } from '@angular/router';
import { DepartementService } from '../departement.service';
import { departements } from './../modeles';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ajout-departement',
  templateUrl: './ajout-departement.component.html',
  styleUrls: ['./ajout-departement.component.scss']
})
export class AjoutDepartementComponent {

  departement:departements={
  depNumber: 0,
  nom: "",
  dateDep:"",
  pourDep:0,
  tauxDep:0,
  description: ""
  }

  constructor(
    private _departementService:DepartementService,
    private _router:Router
  ){}

  saveDep(){
    this._departementService.AjoutDepartements(this.departement);
    this._router.navigate(['/listeDepartement'])

  }




}
