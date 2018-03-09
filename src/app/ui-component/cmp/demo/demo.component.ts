import { Component, OnInit } from '@angular/core';

import { DataCallService } from '../../../service/data-call/data-call.service';

@Component({
    selector: 'app-demo',
    templateUrl: './demo.component.pug',
    styleUrls: ['./demo.component.scss']
})

export class DemoComponent implements OnInit {
    jsonProp: object;
    jsonpProp: object;

    constructor(private dataCall: DataCallService) { }

    ngOnInit() {
        this.dataCall.getJsonData().then(data => {
            this.jsonProp = data;
        });

        this.dataCall.getJsonpData().then(data => {
            this.jsonpProp = data;
        });
    }

}
