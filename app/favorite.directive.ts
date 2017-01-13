import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[mwFavorite]'
})
export class FavoriteDirective {
  @HostBinding('class.is-favorite') isFavorite = true;

  @HostBinding('class.is-favorite-hovering') hovering = false;

  @HostListener('mouseenter') onMouseEnter() {
    this.hovering = true;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.hovering = false;
  }
<<<<<<< HEAD

=======
>>>>>>> parent of 166ab97... Mods to fave file ts and media item working with pipes
  @Input() set mwFavorite(value) {
    this.isFavorite = value;
  }
}
