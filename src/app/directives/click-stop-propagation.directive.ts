import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[click-stop-propogation]'
})
export class ClickStopPropagationDirective {

  constructor() { }

  @HostListener("click", ["$event"])
  public onClick(event: any): void
  {
      event.preventDefault();
  }

}
