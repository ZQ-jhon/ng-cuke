import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { RotateRoundAnimation } from 'src/app/animations/rotate-round.animate';

@Component({
  selector: 'hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss'],
  animations: [
    RotateRoundAnimation,
  ]
})

export class HelloComponent implements OnInit {
  constructor() { }
  isOpen = true;
  toggle(event: Event) {
    this.isOpen = !this.isOpen;
  }
  ngOnInit() { }
}
