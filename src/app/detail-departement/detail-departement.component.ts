import { Component, OnInit } from '@angular/core';
import { departements } from '../modeles';
import { ActivatedRoute, Router } from '@angular/router';
import { DepartementService } from '../departement.service';

@Component({
  selector: 'app-detail-departement',
  templateUrl: './detail-departement.component.html',
  styleUrls: ['./detail-departement.component.scss']
})
export class DetailDepartementComponent implements OnInit{
  departement: departements={
    depNumber: 1,
      nom: 'TIC',
      dateDep:'22-12-2017',
      pourDep: 75,
      tauxDep:51,
      description: "Departement de la Technologie de l'Information et de la Communication "
  }


  depNumber:string|null|undefined
  constructor(
    private _serviceDepartement : DepartementService,
    private _activateRoute: ActivatedRoute,
    private route : Router
  ){}
  ngOnInit(): void {
    this.depNumber=this._activateRoute.snapshot.queryParamMap.get('num') ;
    console.log(this.depNumber);
    this.departement.depNumber=Number(this.depNumber);
    }

supprimerDepartement() {
  if (this.depNumber !== null && this.depNumber !== undefined) {
    const numDep = parseInt(this.depNumber);
    // Confirm the deletion operation
    if (window.confirm("Vous voulez vraiment supprimer le departement numero"+ this.depNumber +"?")) {
      if (this._serviceDepartement.supprimerDepartement(numDep)) {
        alert ("Le departement numero "+ this.depNumber +" a été supprimé avec succès\n" +
          "l'état de la liste a changé");
        // Redirect to the list of apprenants after successful deletion
        this.route.navigate(['/listeDepartement']);
      } else {
        alert("Erreur lors de la suppression du departementt numero " + this.depNumber);
      }
    }
  } else {
    alert("Numero du departement invalide");
  }
}
}
