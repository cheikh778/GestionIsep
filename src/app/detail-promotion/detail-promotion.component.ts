import { ActivatedRoute, Router } from '@angular/router';
import { promotions } from './../modeles';
import { Component } from '@angular/core';
import { PromotionService } from '../promotion.service';

@Component({
  selector: 'app-detail-promotion',
  templateUrl: './detail-promotion.component.html',
  styleUrls: ['./detail-promotion.component.scss']
})
export class DetailPromotionComponent {

  promotion: promotions={
    promNumber: 1,
    dateDProm:'22-02-2020',
    dateFProm:'22-12-2021',
    pourProm:89,
    description: "Promotion 1"
  }
  promNumber:string|null|undefined
  constructor( 
    private _servicePromotion: PromotionService,
    private _activeRoute: ActivatedRoute,
    private route: Router
  ){}
  ngOnInit(): void {
    this.promNumber=this._activeRoute.snapshot.queryParamMap.get('num') ;
    console.log(this.promNumber);
    this.promotion.promNumber=Number(this.promNumber);
    }

supprimerPromotion() {
  if (this.promNumber !== null && this.promNumber !== undefined) {
    const numprom = parseInt(this.promNumber);
   
    if (window.confirm("Vous voulez vraiment supprimer la promotion numero"+ this.promNumber +"?")) {
      if (this._servicePromotion.supprimerPromtion(numprom)) {
        alert ("La promotion numero "+ this.promNumber +" a été supprimé avec succès\n" +
          "l'état de la liste a changé");
        
        this.route.navigate(['/listePromotion']);
      } else {
        alert("Erreur lors de la suppression de la promotion numero " + this.promNumber);
      }
    }
  } else {
    alert("Numero de la promotion invalide");
  }
}

}
