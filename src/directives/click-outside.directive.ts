import {
    Directive,
    ElementRef,
    EventEmitter,
    HostListener,
    Input,
    Output,
} from '@angular/core';

@Directive({
    standalone: true,
    selector: '[appClickOutside]',
})
export class ClickOutsideDirective {
    @Input() outsideClickEnabled: boolean = false;
    @Output() clickOutside = new EventEmitter<void>();

    constructor(private elementRef: ElementRef) { }

    @HostListener('document:click', ['$event.target'])
    onClick(targetElement: HTMLElement) {
        if(this.outsideClickEnabled) {
            const clickedInside = this.elementRef.nativeElement.contains(targetElement);
            
            if (!clickedInside) {
                this.clickOutside.emit();
            }
        }
    }
}
