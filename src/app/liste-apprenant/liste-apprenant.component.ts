import { Component, OnInit } from '@angular/core';
import { Apprenants } from '../modeles';
import { ApprenantService } from '../apprenant.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-liste-apprenant',
  templateUrl: './liste-apprenant.component.html',
  styleUrls: ['./liste-apprenant.component.scss']
})
export class ListeApprenantComponent implements OnInit {

  apprenant: Apprenants[] =[
  ];
  constructor(
    private _serviceApprenant : ApprenantService,
    private _activateRoute: ActivatedRoute,
    private route : Router
  ){}
  ngOnInit(): void {
    this.apprenant = this._serviceApprenant.getListApprenants();
  }
deleteApprenant(num: number){
  if (window.confirm("Vous voulez vraiment supprimer l'apprenant numero"+ num +"?")) {
    if (this._serviceApprenant.supprimerApprenant(num)) {
      alert ("L'apprenant numero "+ num +" a été supprimé avec succès\n" +
        "l'état de la liste a changé");
      
      this.route.navigate(['/listeApprenants']);
    } else {
      alert("Erreur lors de la suppression de l'apprenant numero " + num);
    }
  }
  else {
    alert("Numero de l'apprennant invalide");
  }
    //mise a jour de la liste apres suppression

    this.apprenant=this._serviceApprenant.getListApprenants();

    }

    searchApprenant(num:number){
      if(this._serviceApprenant.searchById(num)){
        this.route.navigate(['/listeApprenant',num]);
      }

    }
 }


