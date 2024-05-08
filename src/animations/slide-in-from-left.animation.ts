import { animate, style, transition, trigger } from "@angular/animations";

export const slideInFromLeftAnimation = trigger('slideInFromLeftAnimation', [
    transition(':enter', [
      style({ transform: 'translateX(-100%)' }), // Initial state: moved outside of the screen to the left
      animate('{{ duration }}ms', style({ transform: 'translateX(0)' })) // Final state: moved to its original position
    ])
]);