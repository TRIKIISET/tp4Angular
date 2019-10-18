import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { ParentComponent } from './application/parent/parent.component';
import { EnfantComponent } from './application/enfant/enfant.component';
import { EmployeComponent } from './employe/employe.component';
import { ListEmployesComponent } from './list-employes/list-employes.component';
import { TableauComponent } from './ex1/tableau/tableau.component';
import { NombreComponent } from './ex1/nombre/nombre.component';
import { MaterielComponent } from './ex2/materiel/materiel.component';
import { MaterielListComponent } from './ex2/materiel-list/materiel-list.component';
import { NombresComponent } from './bootstrap/nombres/nombres.component';
import { MaterialBootstrapComponent } from './ex3/material-bootstrap/material-bootstrap.component';
import { MaterialListBootstrapComponent } from './ex3/material-list-bootstrap/material-list-bootstrap.component';
import { DonComponent } from './ex4/don/don.component';
import { ListeDonsComponent } from './ex4/liste-dons/liste-dons.component';
import { LivreComponent } from './ex5/livre/livre.component';
import { LivreViewComponent } from './ex5/livre-view/livre-view.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    EnfantComponent,
    EmployeComponent,
    ListEmployesComponent,
    TableauComponent,
    NombreComponent,
    MaterielComponent,
    MaterielListComponent,
    NombresComponent,
    MaterialBootstrapComponent,
    MaterialListBootstrapComponent,
    DonComponent,
    ListeDonsComponent,
    LivreComponent,
    LivreViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
