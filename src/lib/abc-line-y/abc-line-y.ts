import { BaseWithIcss } from 'iwe7-base';
import { Component, OnInit, Injector, Input } from '@angular/core';
import { Iwe7IcssService } from 'iwe7-icss';

@Component({
    selector: 'abc-line-y',
    template: ``,
    styleUrls: ['./abc-line-y.scss'],
    providers: [
        Iwe7IcssService
    ]
})
export class AbcLineYComponent extends BaseWithIcss {
    @Input() height: string = '100%';
    @Input() color: string = 'gray';
    constructor(injector: Injector) {
        super(injector);
        this.setStyleInputs(['height','color']);
    }
}
