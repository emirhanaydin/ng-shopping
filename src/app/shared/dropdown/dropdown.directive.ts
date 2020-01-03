import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective implements OnInit {
  private isShown = false;
  private dropdownMenu: ElementRef;

  constructor(private el: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit(): void {
    this.dropdownMenu = this.el.nativeElement.parentElement.querySelector('.dropdown-menu');
  }

  @HostListener('click') toggleOpen() {
    this.isShown = !this.isShown;
    if (this.isShown) {
      this.renderer.addClass(this.dropdownMenu, 'show');
    } else {
      this.renderer.removeClass(this.dropdownMenu, 'show');
    }
  }

}
