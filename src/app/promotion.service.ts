import { Injectable } from '@angular/core';
import { promotions } from './modeles';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {


  listePromotion: promotions[] =[
    {
      promNumber: 1,
      dateDProm:'22-02-2020',
      dateFProm:'22-12-2021',
      pourProm:89,
      description: "Promotion 1"

    },
    {
      promNumber: 2,
      dateDProm:'22-02-2021',
      dateFProm:'22-12-2022',
      pourProm:89,
      description: "Promotion 2"

    },
    {
      promNumber: 3,
      dateDProm:'22-02-2022',
      dateFProm:'22-12-2023',
      pourProm:89,
      description: "Promotion 3 "

    },
  ]


  constructor() { }

  getListePromotion():promotions[]{
    return this.listePromotion;
  }

    AjoutPromotion(promotion: promotions): boolean {
      let promTrouver =false;
      this.listePromotion.forEach(a => {
          if (promotion.promNumber == a.promNumber) {
            promTrouver = true;
          }
      });
      if(promTrouver){
        return false;
      }
      this.listePromotion.push(promotion);
      return true;

    }

    modifierPromotion(promotion : promotions):boolean{
      let a: promotions;
      for (var i = 0; i< this.listePromotion.length;i++){

        a = this.listePromotion[i];
        if (promotion.promNumber == a.promNumber) {
          this.listePromotion.splice(i,1,promotion);


          return true;
        }

      } 
      return false;
    }
    supprimerPromtion(promNumber: number):boolean{
      for (let i = 0; i < this.listePromotion.length; i++) {

        if (this.listePromotion[i].promNumber == promNumber) {
          this.listePromotion.splice(i,1);
          return true;
          
        }   
      }
      return false;
    }

    searchProm(x:string | number): promotions[]{

      let result : promotions[]=[];
      this.listePromotion.forEach(a => {
        if (a.promNumber == x) {
          result.push(a);
          
        }
        
      });
      return result;
    }
    searchById(num : number | undefined){
      for (var i = 0; i<this.listePromotion.length; i++) {
        if (this.listePromotion[i].promNumber == num) {
          return this.listePromotion[i];
          
        }
        
        
      }
      return false;

    }
}
