import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Apprenants } from '../modeles';
import { ApprenantService } from '../apprenant.service';



@Component({
  selector: 'app-detail-apprenant',
  templateUrl: './detail-apprenant.component.html',
  styleUrls: ['./detail-apprenant.component.scss']
})
export class DetailApprenantComponent implements OnInit {

  apprenant: Apprenants={
    appNumber: 1,
    nom: "NDAO",
    prenom: "Serigne Cheikh",
    adresse: "Comico 4",
    email: "locheikhndao778@gmail.com",
    departement: "TIC",
    filiere: "DBE",
    promotion: 3,
    photoUrl:"https://thicc-af.mywaifulist.moe/waifus/zenitsu-agatsuma-demon-slayer-kimetsu-no-yaiba/ZBgPcYV9hMxbfT3tfW5s82lGMJIlklkz29Gtrgvl.jpg?class=thumbnail"

  };

  numApp:string|null|undefined

  constructor(private _activateRoute: ActivatedRoute, private _serviceApprenant: ApprenantService,private route:Router) { }
  ngOnInit(): void {
    this.numApp=this._activateRoute.snapshot.queryParamMap.get('num') ;
    console.log(this.numApp);
    this.apprenant.appNumber=Number(this.numApp);
    }

    supprimerApp() {
      if (this.numApp !== null && this.numApp !== undefined) {
        const numApp = parseInt(this.numApp);
        // Confirm the deletion operation
        if (window.confirm("Vous voulez vraiment supprimer l'apprenant numero"+ this.numApp +"?")) {
          if (this._serviceApprenant.supprimerApprenant(numApp)) {
            alert ("L'apprenant numero "+ this.numApp +" a été supprimé avec succès\n" +
              "l'état de la liste a changé");
            // Redirect to the list of apprenants after successful deletion
            this.route.navigate(['/listeApprenant']);
          } else {
            alert("Erreur lors de la suppression de l'apprenant numero " + this.numApp);
          }
        }
      } else {
        alert("Numero de l'apprennant invalide");
      }
    }

}
