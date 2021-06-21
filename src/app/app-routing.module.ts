import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ShipCardComponent } from './ship-card/ship-card.component';
import { ShipDetailsComponent } from './ship-details/ship-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/starships', pathMatch: 'full' },
  {
    path: 'starships',
    component: ShipCardComponent,
  },
  {
    path: 'starships/detail',
    component: ShipDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
