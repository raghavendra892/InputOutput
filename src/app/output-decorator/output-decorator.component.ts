import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-output-decorator',
  templateUrl: './output-decorator.component.html',
  styleUrls: ['./output-decorator.component.scss']
})
export class OutputDecoratorComponent implements OnInit {
  productstrat : string = "product deliverd"

  @Output() productstatus : EventEmitter<string> = new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void {
  }

  onstatusHan(){
    this.productstatus.emit(this.productstrat)
  }

}
