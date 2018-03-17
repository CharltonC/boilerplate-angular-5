import { Directive, Input, HostBinding, HostListener } from '@angular/core';

@Directive({
    selector: '[appDemoAttrDir]'
})
export class DemoAttributeDirective {
    extraEvtParam = 'extra evt param';

    // Approach 1
    // - For Attribute
    @HostBinding('attr.title') public title = 'demo attribute directive';

    // - For Style
    @HostBinding('style.backgroundColor') public bgColor = 'red';

    // - For Class name
    @HostBinding('class.demo-attr-dir') public clsName = true;

    // - For Event
    @HostListener('click', [ '$event', 'extraEvtParam' ]) onClick(evt, passedExtraEvtParam) {
        // do something
    }

    // Approach 2 (as ElementRef needs to be injected)
    // @Input() bgColor: string;
    // constructor(public elem: ElementRef) {}
    // ngOnChanges() {
        // this.elem.nativeElement.style.backgroundColor = this.appBgColorDir || 'red';
    // }
}
