import { Directive, HostBinding, Input } from '@angular/core';
@Directive({
  selector: '[appInscriptionDisabledDirective]',
})
export class InscriptionDisabledDirective {
  @HostBinding('class.link-is-disabled') status: boolean;
  @Input()
  set appInscriptionDisabledDirective(value) {
    this.status = value;
  }
  constructor() {}
}
