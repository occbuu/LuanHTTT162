import { Component } from '@angular/core';
import { LuanProvider } from '../../providers';
import { HTTP } from '../../utilities';
import { HttpClient } from '@angular/common/http';


@Component({
  templateUrl: 'tabs.component.html',
  styleUrls: ['./common.component.css']
})
export class TabsComponent {
  showTC: boolean = false;
  yes: boolean;
  no: boolean;
  showResult: boolean = false;
  showFinish: boolean = false;

  groupTC: any[];
  maxIdGroupTC = 0;
  curGroupTCid: number = 0;
  curGroupTCname: string = '';
  lstTC: any[];
  curselectedTC: any[];
  selectedTC: any[];

  constructor(private proLuan: LuanProvider,
    public http: HttpClient) {
    this.loadGroupTC();
  }

  clickYes(name: any) {
    this.showTC = true;

    let info = {
      page: 1,
      size: 10,
      filter: {
        type: name
      },
    };
    this.proLuan.searchTC(info).subscribe((rsp: any) => {
      if (rsp.variant === HTTP.STATUS_SUCCESS) {
        this.lstTC = rsp.data;
        if (this.selectedTC != null) {
          this.lstTC.push(this.selectedTC[0]);
        }
      }
    }, (err) => {
      console.log(err);
    });
  }

  clickNo() {
    this.showTC = false;
  }

  clickBegin() {
    this.curGroupTCid += 1;
    this.curGroupTCname = this.groupTC[this.curGroupTCid - 1];
  }

  clickNext() {
    if (this.curGroupTCid < this.maxIdGroupTC) {
      //reset
      this.yes = false;
      this.no = false;
      this.showTC = false;

      this.curGroupTCid += 1;
      this.curGroupTCname = this.groupTC[this.curGroupTCid - 1];
    }
    if (this.curGroupTCid == this.maxIdGroupTC) {
      this.showFinish = true;
    }
  }

  clickBack() {
    this.curGroupTCid = this.curGroupTCid - 1;
    this.curGroupTCname = this.groupTC[this.curGroupTCid - 1];
  }

  loadGroupTC() {
    this.proLuan.getGroupTC(null).subscribe((rsp: any) => {
      if (rsp.variant === HTTP.STATUS_SUCCESS) {
        this.groupTC = rsp.data;
        this.maxIdGroupTC = this.groupTC.length;
      }
    }, (err) => {
      console.log(err);
    });
  }

  clickFinish() {
    this.showResult = true;
    console.log(this.curselectedTC);
  }

}