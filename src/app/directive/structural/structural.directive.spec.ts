import { ViewContainerRef, TemplateRef } from '@angular/core';

import { StructuralDirective } from './structural.directive';

describe('StructuralDirective', () => {
    // Mock ViewContainerRef
    const viewContainer = { createEmbeddedView: (tf, context) => {} } as ViewContainerRef;
    const templateRef = {} as TemplateRef<any>;

    it('should create an instance', () => {
        const directive = new StructuralDirective(viewContainer, templateRef);
        expect(directive).toBeTruthy();
    });

    // Test with Component is Cover with Demo4Component
});
