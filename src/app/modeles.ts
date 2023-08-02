export interface Apprenants {

  appNumber: number;
  nom: string;
  prenom: string;
  adresse: string;
  email: string;
  departement: string;
  filiere: string;
  promotion: number;
  photoUrl?: string;
}
export interface filieres {

  filNumber: number;
  nom: string;
  dateFil:String;
  pourFil:Number;
  tauxFil:number;
  description: string;
}
export interface departements{
  depNumber: number;
  nom: string;
  dateDep:String;
  pourDep:Number;
  tauxDep:number;
  description: string;
}
export interface promotions{
  promNumber: number;
  dateDProm:String;
  dateFProm:String;
  pourProm:Number;
  description: string;
}
export interface Formateur{
  formNumber: number;
  prenom: string;
  nom: string;
  email:string;
  adresse?: string;
  departement?:departements;
  matieres: string[];

}

