import { PromotionService } from './../promotion.service';
import { Component } from '@angular/core';
import { promotions } from '../modeles';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajout-promotion',
  templateUrl: './ajout-promotion.component.html',
  styleUrls: ['./ajout-promotion.component.scss']
})
export class AjoutPromotionComponent {

  promotion: promotions={
    promNumber: 0,
    dateDProm:"",
    dateFProm:"",
    pourProm:0,
    description: ""
  }

  constructor(
    private _promtionService:PromotionService,
    private _router:Router
  ){}

  saveProm(){
    this._promtionService.AjoutPromotion(this.promotion);
    this._router.navigate(['/listePromotion'])

  }

}
