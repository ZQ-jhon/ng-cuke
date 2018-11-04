import { animate, state, style, transition, trigger } from '@angular/animations';

export const CardHoverAnimate =
  trigger('cardHoverAnimate', [
    // ...
    state('cancelHover', style({
      'box-shadow': 'none',
    })),
    state('addHover', style({
      'box-shadow': '0px 0px 3px 20px red',
    })),
    transition('addHover => cancelHover', [
      animate('0.5s')
    ]),
    transition('cancelHover => addHover', [
      animate('0.5s')
    ]),
  ]);
