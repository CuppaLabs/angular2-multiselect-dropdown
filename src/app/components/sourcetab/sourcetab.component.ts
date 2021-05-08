import {Component, Input, OnInit} from '@angular/core'


@Component({
    selector: 'cuppa-source',
    templateUrl: './sourcetab.component.html',
    styleUrls: ['./sourcetab.component.css']

})
export class SourceTab implements OnInit {
    @Input()
    tstitle: string

    @Input()
    htmltitle: string

    @Input()
    csstitle: string

    @Input()
    tsgist: string

    @Input()
    htmlgist: string

    @Input()
    cssgist: string

    active = 1;
    constructor(){}
    ngOnInit(){

    }
}