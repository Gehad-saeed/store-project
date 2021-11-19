import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  latitude = 51.509865;
  longitude = -0.118092;
  type = 'satellite';
  constructor() { }

  ngOnInit(): void {
  }

}
