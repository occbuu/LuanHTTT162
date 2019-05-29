import { Component, OnInit } from '@angular/core';
import { LuanProvider } from '../../providers';
import { HTTP } from '../../utilities';
import { BaseComponent } from './base.component';

@Component({
    templateUrl: 'symptom.component.html',
    styleUrls: ['./common.component.css']
})
export class SymptomComponent extends BaseComponent implements OnInit {

    settings = {
        selectMode: 'single',  //single|multi
        hideHeader: false,
        hideSubHeader: false,
        actions: {
            add: false,
            edit: false,
            delete: false,
            custom: [],
        },
        handle: {
            editable: false
        },
        noDataMessage: 'No data found',
        columns: {
            group: {
                title: 'Group',
                type: 'string',
                filter: false
            },
            name: {
                title: 'Name',
                type: 'string',
                filter: false
            },
            description: {
                title: 'Description',
                type: 'string',
                filter: false
            },
            status: {
                title: 'Status',
                type: 'string',
                filter: false
            }
        }
    };

    constructor(private proLuan: LuanProvider) {
        super();
    }

    ngOnInit(): void {
        this.searchClick(1);
    }

    public search(page: any) {
        let x = {
            "page": page,
            "size": this.pageSize,
            "filter": {},
            "paging": true
        };

        this.proLuan.searchTC(x).subscribe((rsp: any) => {
            if (rsp.variant === HTTP.STATUS_SUCCESS) {
                this.data = rsp.data;

                // paging
                this.total = rsp.totalRecords;
                this.setPage(page);
            }
        }, (err) => {
            console.log(err);
        });
    }

    public searchClick(page: any) {
        this.search(page);
        this.pager = page;
    }
}