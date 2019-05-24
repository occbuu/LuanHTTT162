import { Component } from '@angular/core';

@Component({
  templateUrl: 'tabs.component.html',
  styleUrls: ['./common.component.css']
})
export class TabsComponent {
  showTC : boolean = false;
  yes: boolean;
  no: boolean;
  TC1 = [
    { id: 1, name: 'Đau đầu1111' },
    { id: 2, name: 'Đau bụng1111' },
    { id: 3, name: 'Đau chân1111'},
  ];

  TC2 = [
    { id: 4, name: 'Đau đầu2222' },
    { id: 5, name: 'Đau bụng2222' },
    { id: 6, name: 'Đau chân2222'},
  ];

  TC3 = [
    { id: 7, name: 'Đau đầu3333' },
    { id: 8, name: 'Đau bụng3333' },
    { id: 9, name: 'Đau chân3333'},
  ];

  groupTC = [
    { id: 1, name: 'Tim' },
    { id: 2, name: 'Các chi' },
    { id: 3, name: 'Tiền sử' },
  ]

  maxIdGroupTC = 3;
  curGroupTCid : number = 0;
  curGroupTCname: string = '';
  lstTC : any[];

  constructor() { }

  clickYes() {
    this.showTC = true;
  }

  clickNo() {
    this.showTC = false;
  }

  clickNext() {
    if(this.curGroupTCid < this.maxIdGroupTC) {
      //reset
      this.yes = false;
      this.no = false;
      this.showTC = false;

      this.curGroupTCid += 1;
      this.curGroupTCname = this.groupTC[this.curGroupTCid-1].name;
      if(this.curGroupTCname == 'Tim') {
        this.lstTC = this.TC1;
      }
      if(this.curGroupTCname == 'Các chi') {
        this.lstTC = this.TC2;
      }
      if(this.curGroupTCname == 'Tiền sử') {
        this.lstTC = this.TC3;
      }
    }
  }

}
