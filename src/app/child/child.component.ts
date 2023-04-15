import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  @Input() msgfromparent ! : string;
  msgfromChild : string = "I will Work Hard" //1
  constructor() { }

  ngOnInit(): void {
  }

}
