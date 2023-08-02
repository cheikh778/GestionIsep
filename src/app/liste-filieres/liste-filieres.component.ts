import { ActivatedRoute, Router } from '@angular/router';
import { FilieresService } from '../filieres.service';
import { filieres } from './../modeles';
import { Component } from '@angular/core';

@Component({
  selector: 'app-liste-filieres',
  templateUrl: './liste-filieres.component.html',
  styleUrls: ['./liste-filieres.component.scss']
})
export class ListeFilieresComponent {

  filieres:filieres[] =[
  ]
  constructor(
    private _serviceFiliere: FilieresService,
    private _activeRoute: ActivatedRoute,
    private route: Router
  ){}

  ngOnInit(): void {
    this.filieres = this._serviceFiliere.getListFiliere();
  }
deleteFiliere(num: number){
  if (window.confirm("Vous voulez vraiment supprimer la filiere numero"+ num +"?")) {
    if (this._serviceFiliere.supprimerFiliere(num)) {
      alert ("La filiere numero "+ num +" a été supprimé avec succès\n" +
        "l'état de la liste a changé");
      // Redirect to the list of apprenants after successful deletion
      this.route.navigate(['/listeFiliere']);
    } else {
      alert("Erreur lors de la suppression de la filiere numero " + num);
    }
  }
  else {
    alert("Numero de la filiere invalide");
  }
    //mise a jour de la liste apres suppression
    
    this.filieres=this._serviceFiliere.getListFiliere();
      
    }

    searchFiliere(num:number){
      if(this._serviceFiliere.searchById(num)){
        this.route.navigate(['/listeFiliere',num]);
      }

    }


}
