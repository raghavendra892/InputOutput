import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-output-dec',
  templateUrl: './output-dec.component.html',
  styleUrls: ['./output-dec.component.scss']
})
export class OutputDecComponent implements OnInit {
  msgfromchild ="I will work hard"
  @Output() getmsgfromchild : EventEmitter<string> = new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void {
  }
  onmsgsend(){
    this.getmsgfromchild.emit(this.msgfromchild)
  }

}
