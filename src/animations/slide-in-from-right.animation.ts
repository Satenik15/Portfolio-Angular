import { animate, style, transition, trigger } from "@angular/animations";

export const slideInFromRightAnimation = trigger('slideInFromRightAnimation', [
    transition(':enter', [
      style({ transform: 'translateX(100%)' }), // Initial state: moved outside of the screen to the left
      animate('2s ease', style({ transform: 'translateX(0)' })) // Final state: moved to its original position
    ])
]);