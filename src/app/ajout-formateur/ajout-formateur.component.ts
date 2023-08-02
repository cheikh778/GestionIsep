import { departements } from './../modeles';
import { Component } from '@angular/core';
import { Formateur } from '../modeles';
import { FormateurService } from '../formateur.service';
import { Router } from '@angular/router';
import { DepartementService } from '../departement.service';

@Component({
  selector: 'app-ajout-formateur',
  templateUrl: './ajout-formateur.component.html',
  styleUrls: ['./ajout-formateur.component.scss']
})
export class AjoutFormateurComponent {
  defaultAdresse="isepdiamniadio, rufisque cite du savoir";
  formOK=true;
  borderForm="solid black 3px";
  formPadding=10;
  styleLabel={
    'border-bottom':"2px",
    'font-size':"20px",
    'color':"blue"
  };
  styleTitre={
    "card-title": true,
    "text-center":true,
    "bg-primary": this.formOK,
    "text-light":true,
    "bg-danger":!this.formOK
  }

  formateur:Formateur ={
    formNumber:0,
    nom:"",
    prenom:"",
    email:"",
    adresse:"",
    matieres:[]
  }
  constructor(
    private _formateurService:FormateurService,
    private _router:Router,
    private _departementService:DepartementService
  ){}

  addFormateur(){
    this._formateurService.createFormateur(this.formateur);
    this._router.navigate(['/listeDepartement'])
  }

  getListeDepartements():departements[]{
    return this._departementService.getListeDepartements();
  }
}
