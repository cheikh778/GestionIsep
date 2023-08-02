import { AjoutFiliereComponent } from './../../../../GestionEleve/src/app/ajout-filiere/ajout-filiere.component';
import { ListeDepartementComponent } from './liste-departement/liste-departement.component';
import { ListeApprenantComponent } from './liste-apprenant/liste-apprenant.component';
import { AccueilComponent } from './accueil/accueil.component';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjoutApprenantComponent } from './ajout-apprenant/ajout-apprenant.component';
import { DetailApprenantComponent } from './detail-apprenant/detail-apprenant.component';
import { AjoutDepartementComponent } from './ajout-departement/ajout-departement.component';
import { DetailDepartementComponent } from './detail-departement/detail-departement.component';
import { ListeFilieresComponent } from './liste-filieres/liste-filieres.component';
import { FilieresComponent } from './filieres/filieres.component';
import { DetailFiliereComponent } from './detail-filiere/detail-filiere.component';
import { ListePromotionComponent } from './liste-promotion/liste-promotion.component';
import { AjoutPromotionComponent } from './ajout-promotion/ajout-promotion.component';
import { DetailPromotionComponent } from './detail-promotion/detail-promotion.component';
import { ListeFormateurComponent } from './liste-formateur/liste-formateur.component';
import { AjoutFormateurComponent } from './ajout-formateur/ajout-formateur.component';
import { DetailFormateurComponent } from './detail-formateur/detail-formateur.component';
import { ModifierFormateurComponent } from './modifier-formateur/modifier-formateur.component';


const routes: Routes = [
 {path:"", component:AccueilComponent},
 //apprenant
 {path:"listeApprenant", component:ListeApprenantComponent},
 {path:"ajoutApprenant", component:AjoutApprenantComponent},
 {path: 'detailApprenant', component: DetailApprenantComponent },
 //departement
 {path:"listeDepartement", component:ListeDepartementComponent},
 {path:"ajoutDepartement", component:AjoutDepartementComponent},
 {path:"detailDepartement", component:DetailDepartementComponent},
 //filieres
 {path:"listeFiliere", component:ListeFilieresComponent},
 {path:"ajoutFiliere", component:FilieresComponent},
 {path:"detailFiliere", component:DetailFiliereComponent},
 //promotion
 {path:"listePromotion", component:ListePromotionComponent},
 {path:"ajoutPromotion", component:AjoutPromotionComponent},
 {path:"detailPromotion", component:DetailPromotionComponent},
 //formateur
 {path:"listeformateur", component:ListeFormateurComponent},
 {path:"ajoutFormateur", component:AjoutFormateurComponent},
 {path:"detailFormateur", component:DetailFormateurComponent},
 {path:"modifierFormateur", component:ModifierFormateurComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
