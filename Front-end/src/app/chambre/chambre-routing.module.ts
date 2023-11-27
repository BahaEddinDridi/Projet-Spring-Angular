import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListChambreComponent } from './components/list-chambre/list-chambre.component';
import { AddChambreComponent } from './components/add-chambre/add-chambre.component';

const routes: Routes = [
  {
    path: 'chambres',
    component: ListChambreComponent,
  },

  {
    path: 'addChambre',
    component: AddChambreComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChambreRoutingModule {}
