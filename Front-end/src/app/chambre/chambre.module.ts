import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChambreRoutingModule } from './chambre-routing.module';
import { ListChambreComponent } from './components/list-chambre/list-chambre.component';
import { AddChambreComponent } from './components/add-chambre/add-chambre.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListChambreComponent,
    AddChambreComponent
  ],
  imports: [
    CommonModule,
    ChambreRoutingModule,
    FormsModule
  ]
})
export class ChambreModule { }
