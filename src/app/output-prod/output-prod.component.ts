import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-output-prod',
  templateUrl: './output-prod.component.html',
  styleUrls: ['./output-prod.component.scss']
})
export class OutputProdComponent implements OnInit {
  onmsg : string = "This is the Example of Output Decorator"
  @Output() getstatus : EventEmitter<string> = new EventEmitter<string>()
  constructor() { }

  ngOnInit(): void {
  }

  ongetexa(){
    this.getstatus.emit(this.onmsg)
  }

}

