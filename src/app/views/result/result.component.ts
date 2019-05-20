import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import * as $ from 'jquery';
//Ng-select
import { NgSelectModule } from '@ng-select/ng-select';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Router } from "@angular/router";

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
  info : string = '';
  constructor(private router: Router) { }
  public ngOnInit() {
    
  }

  clickCancel() {
    this.router.navigate(['/index']);
  }

  showInfo(id : any) {
    if(id === 1) {
      this.info = 'Bệnh rối loạn nhịp tim xảy ra khi tim đập quá nhanh, quá chậm, quá sớm hoặc không đều. Nguyên nhân là do các tín hiệu điện điều phối nhịp đập của tim hoạt động bất thường. Hầu hết rối loạn nhịp tim đều vô hại, nhưng một số có thể nghiêm trọng, thậm chí đe dọa tính mạng. Trong khi loạn nhịp, tim không cung cấp đủ máu cho cơ thể. Thiếu máu có thể làm ảnh hưởng đến não, tim và các cơ quan khác.';
    }
    else if(id === 2) {
      this.info = 'Cơn nhồi máu cơ tim xảy ra khi lòng động mạch vành, dòng máu mang oxy và chất dinh dưỡng đến các tế bào cơ tim đột ngột bị chặn lại hoàn toàn. Vùng cơ tim không được cung cấp máu sẽ bị hoại tử. Đây là một tình trạng khẩn cấp, người bệnh có thể tử vong rất nhanh nếu không được cấp cứu kịp thời, những trường hợp may mắn sống sót thì nguy cơ suy tim trong tương lai cũng rất cao.';
    }
  }
}
