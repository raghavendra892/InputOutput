import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-outputdecexam',
  templateUrl: './outputdecexam.component.html',
  styleUrls: ['./outputdecexam.component.scss']
})
export class OutputdecexamComponent implements OnInit {
  msg : string = "Hello"
 @Output() msgfromch : EventEmitter<string> = new EventEmitter<string>()
  constructor() { }

  ngOnInit(): void {
  }
  onmsgHan(){
    this.msgfromch.emit(this.msg)
  }
}
