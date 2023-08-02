import { Formateur } from './modeles';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class FormateurService {

  formateurs: Formateur[]=[];

  constructor() { }

  createFormateur(formateur:Formateur){
      this.formateurs.push(formateur);
  }

  getListeFormateur():Formateur[]{
      return this.formateurs;
  }

  findById(idFormateur:number):Formateur | undefined{
      for (let i = 0; i < this.formateurs.length; i++) {
        const formateur = this.formateurs[i];
        if (formateur.formNumber === idFormateur ) {
          return formateur;
        }
      }
      return ;
  }
}
