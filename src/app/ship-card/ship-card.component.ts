import { Component, OnInit } from '@angular/core';
import { Starship } from '../starwars';
import {
  faRulerHorizontal,
  faPeopleArrows,
  faPeopleCarry,
} from '@fortawesome/free-solid-svg-icons';
import { StarwarsService } from '../starwars.service';
@Component({
  selector: 'app-ship-card',
  templateUrl: './ship-card.component.html',
  styleUrls: ['./ship-card.component.scss'],
})
export class ShipCardComponent implements OnInit {
  public ships!: Array<Starship>;
  faRulerHorizontal = faRulerHorizontal;
  faPeopleArrows = faPeopleArrows;
  faPeopleCarry = faPeopleCarry;

  constructor(private starwarsService: StarwarsService) {}

  ngOnInit(): void {
    // Get all the ships
    this.starwarsService
      .getShips()
      .subscribe((data: any) => (this.ships = data));
  }
}
