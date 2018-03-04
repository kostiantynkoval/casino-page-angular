import { trigger, state, animate, transition, style } from '@angular/animations';

export const toggleHeight = [
  trigger('toggleHeight', [
    state('in', style({})),
    transition('* => void', [
      style({ height: '*' }),
      animate(200, style({ height: 0 }))
    ]),
    transition('void => *', [
      style({ height: 0}),
      animate(200, style({ height: '*' }))
    ])
  ])
];
