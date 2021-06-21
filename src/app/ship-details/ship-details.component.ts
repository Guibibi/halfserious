import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Starship } from '../starwars';
import { StarwarsService } from '../starwars.service';

@Component({
  selector: 'app-ship-details',
  templateUrl: './ship-details.component.html',
  styleUrls: ['./ship-details.component.scss'],
})
export class ShipDetailsComponent implements OnInit {
  public ship!: Starship;
  public pilots!: any;
  public selectedPilot: any;

  constructor(
    public activatedRoute: ActivatedRoute,
    private starwarsService: StarwarsService
  ) {}

  ngOnInit(): void {
    // Get the ship from our history state
    this.ship = history.state.ship;
    this.starwarsService.getPilots(this.ship.pilots).subscribe({
      next: (res) => {
        this.pilots = res;
      },
    });
  }
}
