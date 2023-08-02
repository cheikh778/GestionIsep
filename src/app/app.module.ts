import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListeApprenantComponent } from './liste-apprenant/liste-apprenant.component';
import { AjoutApprenantComponent } from './ajout-apprenant/ajout-apprenant.component';
import { DetailApprenantComponent } from './detail-apprenant/detail-apprenant.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { AccueilComponent } from './accueil/accueil.component';
import { FilieresComponent } from './filieres/filieres.component';
import { ListeFilieresComponent } from './liste-filieres/liste-filieres.component';
import { ListePromotionComponent } from './liste-promotion/liste-promotion.component';
import { AjoutPromotionComponent } from './ajout-promotion/ajout-promotion.component';
import { DetailPromotionComponent } from './detail-promotion/detail-promotion.component';
import { DetailFiliereComponent } from './detail-filiere/detail-filiere.component';
import { DetailDepartementComponent } from './detail-departement/detail-departement.component';
import { ListeDepartementComponent } from './liste-departement/liste-departement.component';
import { AjoutDepartementComponent } from './ajout-departement/ajout-departement.component';
import { AjoutFormateurComponent } from './ajout-formateur/ajout-formateur.component';
import { ListeFormateurComponent } from './liste-formateur/liste-formateur.component';
import { DetailFormateurComponent } from './detail-formateur/detail-formateur.component';
import { ModifierFormateurComponent } from './modifier-formateur/modifier-formateur.component';

@NgModule({
  declarations: [
    AppComponent,
    ListeApprenantComponent,
    AjoutApprenantComponent,
    DetailApprenantComponent,
    MenuComponent,
    FooterComponent,
    AccueilComponent,
    FilieresComponent,
    ListeFilieresComponent,
    ListePromotionComponent,
    AjoutPromotionComponent,
    DetailPromotionComponent,
    DetailFiliereComponent,
    DetailDepartementComponent,
    ListeDepartementComponent,
    AjoutDepartementComponent,
    AjoutFormateurComponent,
    ListeFormateurComponent,
    DetailFormateurComponent,
    ModifierFormateurComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
