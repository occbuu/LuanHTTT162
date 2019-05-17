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
  templateUrl: 'result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  cities2 = [
    { id: 1, name: 'Đau đầu' },
    { id: 2, name: 'Đau bụng' },
    { id: 3, name: 'Đau chân', disabled: true },
    { id: 4, name: 'Đau lưng' },
    { id: 5, name: 'Mệt mỏi và buồn ngủ vào ban ngày' },
    { id: 6, name: 'Khó thở' },
    { id: 7, name: 'Tim đập nhanh' },
    { id: 8, name: 'Giảm cân không rõ nguyên nhân' },
    { id: 9, name: 'Sốt thường xuyên hoặc nhiễm trùng' },
    { id: 10, name: 'Cơ thể tự nhiên yếu đi' },
    { id: 11, name: 'Ho mãn tính và đau ngực' },
    { id: 12, name: 'Đầy hơi đau bụng' },
    { id: 13, name: 'Ợ nóng mạn tính' }
  ];
  public ngOnInit() {
  }
}
