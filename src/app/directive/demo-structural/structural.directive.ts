import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
    selector: '[appStructuralDir]'
})
export class StructuralDirective {
    // Common for both Approaches
    constructor(public vcf: ViewContainerRef, public tf: TemplateRef<any>) {}

    // First Passed value via `appStructuralDir="boundPropToPass"`
    @Input() set appStructuralDir(passedBdVal) {
        // Clear container content
        // this.vcf.clear();

        // OR

        // Create content without view context (w/o passing values)
        // this.vcf.createEmbeddedView(this.tf);

        // OR

        // Create content with view context (passing values)
        passedBdVal.forEach((val, idx) => {
            this.vcf.createEmbeddedView(
                // Usage Example (`customName1` points to `$implicit` value, `customName2` points to `idx`):
                //     <p appStructuralDir="boundPropToPass; let customName1; let customName2=_idx">
                //          {{customName1}} {{customName2}}
                //     </p>
                this.tf, { $implicit: val, _idx: idx }
            );
        });
    }

    // Two Additional passed value via `appStructuralDir="..., ExtraPropToPass:bdProp1ToPass；TestPass: bdProp2ToPass"`
    @Input() set appStructuralDirExtraPropToPass(val) {}
    @Input() appStructuralDirTestPass: any;
}
