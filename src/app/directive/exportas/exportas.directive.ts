import { Directive } from '@angular/core';

@Directive({
    selector: '[appExportas]',
    exportAs: '_appExportas',
})
export class ExportasDirective {
    methodName() {}
}
