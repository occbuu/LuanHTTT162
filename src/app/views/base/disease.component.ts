import { Component, OnInit } from '@angular/core';
import { LuanProvider } from '../../providers';
import { HTTP } from '../../utilities';
import { HttpClient } from '@angular/common/http';

@Component({
  templateUrl: 'disease.component.html',
  styleUrls: ['./common.component.css']
})
export class DiseaseComponent implements OnInit {

  data = [];
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
      code: {
        title: 'Code',
        type: 'string',
        filter: false
      },
      name: {
        title: 'Name',
        type: 'string',
        filter: false
      },
      chapter: {
        title: 'Chapter',
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
  }

  ngOnInit(): void {
    let x = {
      "page": 1,
      "size": 10,
      "filter": {
      },
      "paging": false
    };

    this.proLuan.readDisease(x).subscribe((rsp: any) => {
      if (rsp.variant === HTTP.STATUS_SUCCESS) {
        console.log(rsp);
        this.data = rsp.data;
      }
    }, (err) => {
      console.log(err);
    });
  }

}