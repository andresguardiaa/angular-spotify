 import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: 'img[appImgBroken]'
})
export class ImgBrokenDirective {

  @HostListener('error') handleError(): void {
    const elNative = this.elHost.nativeElement
      console.log('Esta imagen no va -->', this.elHost)
      elNative.src = ''
    }

  constructor(private elHost:ElementRef) {


    
   }

}
