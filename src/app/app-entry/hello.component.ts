import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { slideInAnimation } from '../animations/slideIn.animate';
@Component({
  selector: 'hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss'],
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
        transform: 'rotate(0deg)',
      })),
      state('closed', style({
        transform: 'rotate(360deg)',
      })),
      transition('open => closed', [
        animate('1.2s')
      ]),
      transition('closed => open', [
        animate('1.2s')
      ]),
    ]),
    slideInAnimation,
  ]
})

export class HelloComponent implements OnInit {
  constructor() { }
  isOpen = true;
  toggle(event: Event) {
    this.isOpen = !this.isOpen
  }
  ngOnInit() { }
}
