import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PersonneComponent } from './personne/personne.component';
import { ListPersonnesComponent } from './list-personnes/list-personnes.component';
import { ParentComponent } from './parent/parent.component';
import { EnfantComponent } from './enfant/enfant.component';
import { EmployeComponent } from './employe/employe.component';
import { ListEmployesComponent } from './list-employes/list-employes.component';
import { TableauComponent } from './ex1/tableau/tableau.component';
import { NombreComponent } from './ex1/nombre/nombre.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonneComponent,
    ListPersonnesComponent,
    ParentComponent,
    EnfantComponent,
    EmployeComponent,
    ListEmployesComponent,
    TableauComponent,
    NombreComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
