import { Directive } from '@angular/core';

@Directive({
    selector: '[appDemoExportas]',
    exportAs: '_appDemoExportas',
})
export class DemoExportasDirective {
    methodName() {}
}
