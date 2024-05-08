import { animate, state, style, transition, trigger } from "@angular/animations";

export const fadeInAnimation = trigger('fadeInAnimation', [
    state('in', style({opacity: 1})),
    transition(':enter', [
        style({ opacity: 0 }),
        animate('1500ms ease-in', style({ opacity: 1 })),
    ]),
]);