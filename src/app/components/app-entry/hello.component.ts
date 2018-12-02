import { Component, OnInit } from '@angular/core';
import { RotateRoundAnimation } from 'src/app/animations/rotate-round.animate';
import { CardHoverAnimate } from '../../animations/card-hover.animate';

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
  public isOpen = true;
  public isHover = false;
  constructor() { }
  public toggle() {
    this.isOpen = !this.isOpen;
  }

  public handleCardHover({ type }) {
    if (type === 'mouseenter') { this.isHover = true; }
    if (type === 'mouseleave') { this.isHover = false; }
  }
  public ngOnInit() { }
}
