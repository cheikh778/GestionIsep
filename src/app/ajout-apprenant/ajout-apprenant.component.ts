import { PromotionService } from './../promotion.service';
import { filieres, promotions } from './../modeles';
import { Component } from '@angular/core';
import { Apprenants, departements } from '../modeles';
import { DepartementService } from '../departement.service';
import { FilieresService } from '../filieres.service';
import { ApprenantService } from '../apprenant.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-ajout-apprenant',
  templateUrl: './ajout-apprenant.component.html',
  styleUrls: ['./ajout-apprenant.component.scss']
})
export class AjoutApprenantComponent {
  apprenant:Apprenants={
    appNumber:0,
    nom:"",
    prenom:"",
    adresse:"",
    email:"",
    departement:"",
    filiere:"",
    promotion:0,
    photoUrl:""
  }

  constructor(
    private _apprenantService:ApprenantService,
    private _departementService:DepartementService,
    private _promtionService:PromotionService,
    private _filiereService:FilieresService,
    private _router:Router
  ){}

  saveApp(){
    this._apprenantService.AjoutApprenant(this.apprenant);
    this._router.navigate(['/listeApprenant'])

  }

  getListeDepartements():departements[]{
    return this._departementService.getListeDepartements();
  }

  getListeFilieres():filieres[]{
    return this._filiereService.getListFiliere();

  }

  getListePromotion():promotions[]{
    return this._promtionService.getListePromotion();
  }

}
