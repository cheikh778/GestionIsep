import { PromotionService } from './../promotion.service';
import { promotions } from './../modeles';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-liste-promotion',
  templateUrl: './liste-promotion.component.html',
  styleUrls: ['./liste-promotion.component.scss']
})
export class ListePromotionComponent {

  promotion: promotions[] =[
  ]
  constructor( 
    private _servicePromotion: PromotionService,
    private _activeRoute: ActivatedRoute,
    private route: Router
  ){}

  ngOnInit(): void {
    this.promotion = this._servicePromotion.getListePromotion();
  }
deletePromotion(num: number){
  if (window.confirm("Vous voulez vraiment supprimer la promotion numero"+ num +"?")) {
    if (this._servicePromotion.supprimerPromtion(num)) {
      alert ("La promotion numero "+ num +" a été supprimé avec succès\n" +
        "l'état de la liste a changé");
      // Redirect to the list of apprenants after successful deletion
      this.route.navigate(['/listePromotion']);
    } else {
      alert("Erreur lors de la suppression du departement numero " + num);
    }
  }
  else {
    alert("Numero de la invalide");
  }
    //mise a jour de la liste apres suppression
    
    this.promotion=this._servicePromotion.getListePromotion();
      
    }

    searchDepartement(num:number){
      if(this._servicePromotion.searchById(num)){
        this.route.navigate(['/listePromotion',num]);
      }

    }


}
