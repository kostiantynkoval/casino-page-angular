import { trigger, state, animate, transition, style } from '@angular/animations';

export const toggleOpacity = [
  trigger('toggleOpacity', [
    state('in', style({})),
    transition('* => void', [
      style({ opacity: '1' }),
      animate(200, style({ opacity: '0' }))
    ]),
    transition('void => *', [
      style({ opacity: '0'}),
      animate(200, style({ opacity: '1' }))
    ])
  ])
];
