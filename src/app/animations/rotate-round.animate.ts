import { animate, state, style, transition, trigger } from '@angular/animations';

export const RotateRoundAnimation =
  trigger('openClose', [
    // ...
    state('open', style({
      transform: 'rotate(0deg)',
    })),
    state('closed', style({
      transform: 'rotate(360deg)',
    })),
    transition('open => closed', [
      animate('0.5s')
    ]),
    transition('closed => open', [
      animate('0.5s')
    ]),
  ]);
