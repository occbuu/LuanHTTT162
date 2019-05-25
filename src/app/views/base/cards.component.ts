import { Component } from '@angular/core';

@Component({
  templateUrl: 'cards.component.html',
  styleUrls: ['common.component.css']
})
export class CardsComponent {
  private fieldArray: Array<any> = [];
  private newAttribute: any = {};

  addFieldValue() {
    this.fieldArray.push(this.newAttribute)
    this.newAttribute = {};
  }

  deleteFieldValue(index) {
    this.fieldArray.splice(index, 1);
  }
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
  constructor() { }

}
