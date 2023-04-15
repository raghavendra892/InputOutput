import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit {
  frameWork : string = "Angular"
  constructor() { }

  ngOnInit(): void {
  }

  onFrameWorkChanger(val : string){
    console.log(val)
    this.frameWork = val;
  }

  
//   onFrameWorkChanger(eve : Event){
//    let val = (eve.target as HTMLElement).innerText
//    this.frameWork = val
//   }
}
