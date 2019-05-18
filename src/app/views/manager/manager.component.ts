import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import * as $ from 'jquery';
//Ng-select
import { NgSelectModule } from '@ng-select/ng-select';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [ NgSelectModule, CommonModule, FormsModule ]
  })

@Component({
  selector: 'app-dashboard',
  templateUrl: 'manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {
  private fieldArray: Array<any> = [];
  private newAttribute: any = {};
  isshowAdd : boolean = false;

  addFieldValue() {
    this.fieldArray.push(this.newAttribute)
    this.newAttribute = {};
  }

  deleteFieldValue(index) {
    this.fieldArray.splice(index, 1);
  }
  public ngOnInit() {
  }

  showAdd() {
    console.log('Nhat');
    if(!this.isshowAdd) {
      this.isshowAdd = true;
    }
  }
}
