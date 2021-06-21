import { Component, Input, OnInit } from '@angular/core';
import { Pilot } from '../starwars';

@Component({
  selector: 'app-pilot-details',
  templateUrl: './pilot-details.component.html',
  styleUrls: ['./pilot-details.component.scss'],
})
export class PilotDetailsComponent implements OnInit {
  @Input() pilot!: Pilot;

  constructor() {}

  ngOnInit(): void {}
}
