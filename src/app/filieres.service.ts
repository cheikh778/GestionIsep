import { filieres } from './modeles';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilieresService {

  listeFiliere: filieres[]=[
    {
      filNumber: 1,
      nom: 'DBE',
      dateFil: '22-10-2019',
      pourFil: 91,
      tauxFil: 20,
      description: "Les futurs developpeurs Back-end"

    },
    {
      filNumber: 2,
      nom: 'DFE',
      dateFil: '22-10-2019',
      pourFil: 91,
      tauxFil: 24,
      description: "Les futurs developpeurs Front-end "

    },
    {
      filNumber: 3,
      nom: 'ABD',
      dateFil: '22-10-2019',
      pourFil: 91,
      tauxFil: 21,
      description: "Les futurs DBA "

    }
  ]

  constructor() { }

  getListFiliere():filieres[]{
    return this.listeFiliere;
  }

    AjoutFiliere(filiere: filieres): boolean {
      let filTrouver =false;
      this.listeFiliere.forEach(a => {
          if (filiere.filNumber == a.filNumber) {
            filTrouver = true;
          }
      });
      if(filTrouver){
        return false;
      }
      this.listeFiliere.push(filiere);
      return true;

    }

    modifierFiliere(filiere : filieres):boolean{
      let a: filieres;
      for (var i = 0; i< this.listeFiliere.length;i++){

        a = this.listeFiliere[i];
        if (filiere.filNumber == a.filNumber) {
          this.listeFiliere.splice(i,1,filiere);


          return true;
        }

      } 
      return false;
    }
    supprimerFiliere(filNumber: number):boolean{
      for (let i = 0; i < this.listeFiliere.length; i++) {

        if (this.listeFiliere[i].filNumber == filNumber) {
          this.listeFiliere.splice(i,1);
          return true;
          
        }   
      }
      return false;
    }

    searchFil(x:string | number): filieres[]{

      let result : filieres[]=[];
      this.listeFiliere.forEach(a => {
        if (a.filNumber == x || a.nom == x || a.nom) {
          result.push(a);
          
        }
        
      });
      return result;
    }
    searchById(num : number | undefined){
      for (var i = 0; i<this.listeFiliere.length; i++) {
        if (this.listeFiliere[i].filNumber == num) {
          return this.listeFiliere[i];
          
        }
        
        
      }
      return false;

    }
}
