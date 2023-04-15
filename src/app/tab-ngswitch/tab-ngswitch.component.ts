import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab-ngswitch',
  templateUrl: './tab-ngswitch.component.html',
  styleUrls: ['./tab-ngswitch.component.scss']
})
export class TabNgswitchComponent implements OnInit {
  frameWork : string = "Angular"
  constructor() { }

  ngOnInit(): void {
  }

}
