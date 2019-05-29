import { Component, OnInit } from '@angular/core';
import { LuanProvider } from '../../providers';
import { HTTP } from '../../utilities';
import { BaseComponent } from './base.component';

@Component({
    templateUrl: 'patient-data.component.html',
    styleUrls: ['./common.component.css']
})
export class PatientDataComponent extends BaseComponent implements OnInit {

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
            age: {
                title: 'Age',
                type: 'string',
                filter: false
            },
            sex: {
                title: 'Sex',
                type: 'string',
                filter: false
            },
            symptons: {
                title: 'Symptons',
                type: 'string',
                filter: false
            },
            originalHealth: {
                title: 'OriginalHealth',
                type: 'string',
                filter: false
            },
            bloodPressure: {
                title: 'BloodPressure',
                type: 'string',
                filter: false
            },
            bloodPressureP: {
                title: 'BloodPressureP',
                type: 'string',
                filter: false
            },
            bloodPressureN: {
                title: 'BloodPressureN',
                type: 'string',
                filter: false
            },
            temperature: {
                title: 'Temperature',
                type: 'string',
                filter: false
            },
            bloodVessel: {
                title: 'BloodVessel',
                type: 'string',
                filter: false
            },
            nDays: {
                title: 'NDays',
                type: 'string',
                filter: false
            },
            description: {
                title: 'Description',
                type: 'string',
                filter: false
            },
            resultDisease1: {
                title: 'ResultDisease1',
                type: 'string',
                filter: false
            },
            resultDisease2: {
                title: 'ResultDisease2',
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

        this.proLuan.readPatientData(x).subscribe((rsp: any) => {
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