import { Directive , ElementRef , HostListener} from '@angular/core';

@Directive({
  selector: '[appAttr]'
})
export class AttrDirective {

  constructor( private ef : ElementRef) {
    ef.nativeElement.style.color = "blue";
   }
@HostListener("mouseenter") onmouseenter() {
  this.ef.nativeElement.style.color = "green";
}
@HostListener("mouseleave") onmouseout() {
  this.ef.nativeElement.style.color = "yellow";
}
}
