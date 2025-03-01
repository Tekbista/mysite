import { Directive, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appActiveRoute]'
})
export class ActiveRouteDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('click') onClick() {
    const liElement = this.el.nativeElement;
    const activeClass = 'active';

    // Remove 'active' class from all sibling elements
    const parentElement = liElement.parentElement;
    const children = parentElement.children;
    for (let i = 0; i < children.length; i++) {
      this.renderer.removeClass(children[i], activeClass);
    }

    // Add 'active' class to the clicked element
    this.renderer.addClass(liElement, activeClass);

  }
}
