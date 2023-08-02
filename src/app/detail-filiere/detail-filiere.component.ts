import { ActivatedRoute, Router } from '@angular/router';
import { filieres } from './../modeles';
import { Component } from '@angular/core';
import { FilieresService } from '../filieres.service';

@Component({
  selector: 'app-detail-filiere',
  templateUrl: './detail-filiere.component.html',
  styleUrls: ['./detail-filiere.component.scss']
})
export class DetailFiliereComponent {

  filiere: filieres =
    {
      filNumber: 1,
      nom: 'DBE',
      dateFil: '22-10-2019',
      pourFil: 91,
      tauxFil: 20,
      description: "Les futurs developpeurs Back-end"

    }
    filNumber:string|null|undefined
    constructor(
      private _serviceFiliere: FilieresService,
      private _activeRoute: ActivatedRoute,
      private route: Router
    ){}
    ngOnInit(): void {
      this.filNumber=this._activeRoute.snapshot.queryParamMap.get('num') ;
      console.log(this.filNumber);
      this.filiere.filNumber=Number(this.filNumber);
      }
  
  supprimerFiliere() {
    if (this.filNumber !== null && this.filNumber !== undefined) {
      const filDep = parseInt(this.filNumber);
      // Confirm the deletion operation
      if (window.confirm("Vous voulez vraiment supprimer la filiere numero"+ this.filNumber +"?")) {
        if (this._serviceFiliere.supprimerFiliere(filDep)) {
          alert ("La filiere numero "+ this.filNumber +" a été supprimé avec succès\n" +
            "l'état de la liste a changé");
          // Redirect to the list of apprenants after successful deletion
          this.route.navigate(['/listeFiliere']);
        } else {
          alert("Erreur lors de la suppression de la filiere numero " + this.filNumber);
        }
      }
    } else {
      alert("Numero de la filiere invalide");
    }
  }

}
