import { Injectable } from '@angular/core';
import { departements } from './modeles';

@Injectable({
  providedIn: 'root'
})
export class DepartementService {

  listeDepartements : departements[] =[
    {
      depNumber: 1,
      nom: 'TIC',
      dateDep:'22-12-2017',
      pourDep: 75,
      tauxDep:51,
      description: "Departement de la Technologie de l'Information et de la Communication "

    },
    {
      depNumber: 2,
      nom: 'Automobile',
      dateDep:'22-12-2017',
      pourDep:75,
      tauxDep:51,
      description: "Departement de la formation des futurs de la mecanique "

    },
    {
      depNumber: 3,
      nom: 'Genie Civil',
      dateDep:'22-12-2023',
      pourDep:0,
      tauxDep:51,
      description: "Departement de la formation des futurs de la mecanique "

    },

  ]


  constructor() { }

  getListeDepartements():departements[]{
    return this.listeDepartements;
  }

    AjoutDepartements(departement: departements): boolean {
      let depTrouver =false;
      this.listeDepartements.forEach(a => {
          if (departement.depNumber == a.depNumber) {
            depTrouver = true;
          }
      });
      if(depTrouver){
        return false;
      }
      this.listeDepartements.push(departement);
      return true;

    }

    modifierDepartement(departement : departements):boolean{
      let a: departements;
      for (var i = 0; i< this.listeDepartements.length;i++){

        a = this.listeDepartements[i];
        if (departement.depNumber == a.depNumber) {
          this.listeDepartements.splice(i,1,departement);


          return true;
        }

      }
      return false;
    }
    supprimerDepartement(depNumber: number):boolean{
      for (let i = 0; i < this.listeDepartements.length; i++) {

        if (this.listeDepartements[i].depNumber == depNumber) {
          this.listeDepartements.splice(i,1);
          return true;

        }
      }
      return false;
    }

    searchDep(x:string | number): departements[]{

      let result : departements[]=[];
      this.listeDepartements.forEach(a => {
        if (a.depNumber == x || a.nom == x || a.nom) {
          result.push(a);

        }

      });
      return result;
    }
    searchById(num : number | undefined){
      for (var i = 0; i<this.listeDepartements.length; i++) {
        if (this.listeDepartements[i].depNumber == num) {
          return this.listeDepartements[i];

        }


      }
      return false;

    }
}
