import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { RotateRoundAnimation } from 'src/app/animations/rotate-round.animate';
import { CardHoverAnimate } from '../../animations/card-hover.animate';
import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/Operators';

@Component({
  selector: 'hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss'],
  animations: [
    RotateRoundAnimation,
    CardHoverAnimate,
  ]
})

export class HelloComponent implements OnInit {
  constructor() { }
  isOpen = true;
  isHover = false;
  toggle(ev: Event) {
    fromEvent(ev.target, ev.type).pipe(
      debounceTime(500)
    )
    ev.preventDefault();
    this.isOpen = !this.isOpen;
  }

  handleCardHover({ type }) {
    if (type === 'mouseenter') { this.isHover = true }
    if (type === 'mouseleave') { this.isHover = false }
  }
  ngOnInit() { }
}
