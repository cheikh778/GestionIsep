import { Router } from '@angular/router';
import { FilieresService } from '../filieres.service';
import { filieres } from './../modeles';
import { Component } from '@angular/core';

@Component({
  selector: 'app-filieres',
  templateUrl: './filieres.component.html',
  styleUrls: ['./filieres.component.scss']
})
export class FilieresComponent {
  filiere: filieres={
  filNumber: 0,
  nom: "",
  dateFil:"",
  pourFil:0,
  tauxFil:0,
  description: ""
  }

  constructor(
    private _filiereService:FilieresService,
    private _router:Router
  ){}

  saveFil(){
    this._filiereService.AjoutFiliere(this.filiere);
    this._router.navigate(['/listeFiliere'])

  }

}
