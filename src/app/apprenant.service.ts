import { Apprenants } from './modeles';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApprenantService {
  listeApprenants: Apprenants[] =[
    {
      appNumber: 1,
      nom: 'NDAO',
      prenom: 'Serigne Cheikh',
      adresse: 'Comico 4',
      email: 'locheikhndao778@gmail.com',
      departement: 'TIC',
      filiere: 'DBE',
      promotion: 3,
      photoUrl:'https://thicc-af.mywaifulist.moe/waifus/zenitsu-agatsuma-demon-slayer-kimetsu-no-yaiba/ZBgPcYV9hMxbfT3tfW5s82lGMJIlklkz29Gtrgvl.jpg?class=thumbnail'
    },
    {
      appNumber: 2,
      nom: 'DIOP',
      prenom: 'Aminata',
      adresse: 'HLM Grand Yoff',
      email: 'aminatadiop@gmail.com',
      departement: 'Génie Civil',
      filiere: 'BTP',
      promotion: 2,
      photoUrl:'https://i1.sndcdn.com/avatars-55OZkCOHrrzzpygm-JG1CJA-t500x500.jpg'
    },
    {
      appNumber: 3,
      nom: 'DIOUF',
      prenom: 'Moussa',
      adresse: 'Parcelles Assainies',
      email: 'moussadiouf@gmail.com',
      departement: 'Génie Électrique',
      filiere: 'Electrotechnique',
      promotion: 4,
      photoUrl:'https://wallpapers-clan.com/wp-content/uploads/2022/09/demon-slayer-inosuke-pfp-4.jpg'
    },
    {
      appNumber: 4,
      nom: 'SOW',
      prenom: 'Mariama',
      adresse: 'Dakar Plateau',
      email: 'mariamasow@gmail.com',
      departement: 'Finance',
      filiere: 'Comptabilité',
      promotion: 3,
      photoUrl:'https://thicc-af.mywaifulist.moe/waifus/zenitsu-agatsuma-demon-slayer-kimetsu-no-yaiba/ZBgPcYV9hMxbfT3tfW5s82lGMJIlklkz29Gtrgvl.jpg?class=thumbnail'
    }
  ];

  constructor(){}


  getListApprenants():Apprenants[]{
    return this.listeApprenants;
  }

    AjoutApprenant(apprenant: Apprenants): boolean {
      let appTrouver =false;
      this.listeApprenants.forEach(a => {
          if (apprenant.appNumber == a.appNumber) {
            appTrouver = true;
          }
      });
      if(appTrouver){
        return false;
      }
      this.listeApprenants.push(apprenant);
      return true;

    }

    modifierApprenant(apprenant : Apprenants):boolean{
      let a: Apprenants;
      for (var i = 0; i< this.listeApprenants.length;i++){

        a = this.listeApprenants[i];
        if (apprenant.appNumber == a.appNumber) {
          this.listeApprenants.splice(i,1,apprenant);


          return true;
        }

      } 
      return false;
    }
    supprimerApprenant(appNumber: number):boolean{
      for (let i = 0; i < this.listeApprenants.length; i++) {

        if (this.listeApprenants[i].appNumber == appNumber) {
          this.listeApprenants.splice(i,1);
          return true;
          
        }   
      }
      return false;
    }

    searchApp(x:string | number): Apprenants[]{

      let result : Apprenants[]=[];
      this.listeApprenants.forEach(a => {
        if (a.appNumber == x || a.prenom == x || a.nom) {
          result.push(a);
          
        }
        
      });
      return result;
    }
    searchById(num : number | undefined){
      for (var i = 0; i<this.listeApprenants.length; i++) {
        if (this.listeApprenants[i].appNumber == num) {
          return this.listeApprenants[i];
          
        }
        
        
      }
      return false;

    }
}

