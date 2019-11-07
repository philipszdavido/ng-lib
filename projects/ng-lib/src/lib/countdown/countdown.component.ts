import { Component, OnInit, Input,EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'lib-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css']
})
export class CountdownComponent implements OnInit {
  @Input() end= 0
  @Output() stopevent = new EventEmitter()
  timer
  displayCurrent

  constructor() { }

  ngOnInit() {
    if(this.end) {
      this.timer=setInterval(()=> {
        this.end -= 1;
        if(this.end === 0) {
          this.stopevent.emit()
          clearInterval(this.timer)
        }
      }, 100)
    }
  }

}
