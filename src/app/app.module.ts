import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShipCardComponent } from './ship-card/ship-card.component';
import { StarwarsService } from './starwars.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ShipDetailsComponent } from './ship-details/ship-details.component';
import { PilotDetailsComponent } from './pilot-details/pilot-details.component';

@NgModule({
  declarations: [AppComponent, ShipCardComponent, ShipDetailsComponent, PilotDetailsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
  ],
  providers: [StarwarsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
