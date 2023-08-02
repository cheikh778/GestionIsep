import { ActivatedRoute, Router } from '@angular/router';
import { DepartementService } from '../departement.service';
import { departements } from './../modeles';
import { Component } from '@angular/core';

@Component({
  selector: 'app-liste-departement',
  templateUrl: './liste-departement.component.html',
  styleUrls: ['./liste-departement.component.scss']
})
export class ListeDepartementComponent {
  departements : departements[] =[]

  constructor(
    private _serviceDepartement : DepartementService,
    private _activateRoute: ActivatedRoute,
    private route : Router
  ){}

  ngOnInit(): void {
    this.departements = this._serviceDepartement.getListeDepartements();
  }
deleteDepartement(num: number){
  if (window.confirm("Vous voulez vraiment supprimer le departement numero"+ num +"?")) {
    if (this._serviceDepartement.supprimerDepartement(num)) {
      alert ("Le departement numero "+ num +" a été supprimé avec succès\n" +
        "l'état de la liste a changé");
      // Redirect to the list of apprenants after successful deletion
      this.route.navigate(['/listeDepartement']);
    } else {
      alert("Erreur lors de la suppression du departement numero " + num);
    }
  }
  else {
    alert("Numero du departement invalide");
  }
    //mise a jour de la liste apres suppression
    
    this.departements=this._serviceDepartement.getListeDepartements();
      
    }

    searchDepartement(num:number){
      if(this._serviceDepartement.searchById(num)){
        this.route.navigate(['/listeDepartement',num]);
      }

    }

}
