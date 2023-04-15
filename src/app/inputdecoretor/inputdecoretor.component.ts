import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-inputdecoretor',
  templateUrl: './inputdecoretor.component.html',
  styleUrls: ['./inputdecoretor.component.scss']
})
export class InputdecoretorComponent implements OnInit {
 @Input () inputmsgfromparent! : string;
  constructor() { }

  ngOnInit(): void {
  }

}
