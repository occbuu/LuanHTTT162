import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Component({
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  lstDownload: any[] = [
    {
      id: 1,
      title: 'Viêm màng não ở người lớn: Nguyên nhân, triệu chứng và cách điều trị',
      type: '',
      img: 'viemmangnao.jpg',
      download: '#/base/cards',
      date: '24/05/2019'
    },
    {
      id: 2,
      title: 'Bệnh sốt xuất huyết nguy hiểm như thế nào?',
      type: '',
      img: 'sotxuathuyet.jpg',
      download: '#/base/carousels',
      date: '30/04/2019'
    },
    {
      id: 3,
      title: 'HIV/AIDS là bệnh gì ? Nguy hiểm thế nào ?',
      type: '',
      img: 'hiv.jpg',
      download: '#/base/forms',
      date: '22/04/2019'
    },
    {
      id: 4,
      title: 'Đau nhức xương khớp: Nguyên nhân và cách điều trị hiệu quả',
      type: '',
      img: 'dauxuongkhop.jpg',
      download: '/base/progress',
      date: '21/04/2019'
    }
  ]
  lstUpdate: any[] = [
    {
      id: 1,
      title: 'Bệnh sởi: Nguyên nhân, triệu chứng, cách phòng tránh',
      type: '',
      img: 'soi.jpg',
      download: '#/base/collapses',
      date: '22/05/2019'
    },
    {
      id: 2,
      title: 'Bệnh lao phổi: Nguyên nhân, triệu chứng và điều trị',
      type: '',
      img: 'laophoi.jpg',
      download: '#/base/paginations',
      date: '20/05/2019'
    },
    {
      id: 3,
      title: 'Bệnh gút: triệu chứng, chẩn đoán và điều trị',
      type: '',
      img: 'gut.jpg',
      download: '#/base/popovers',
      date: '24/04/2019'
    },
    {
      id: 4,
      title: 'Ung thư là gì?',
      type: '',
      img: 'ungthu.jpg',
      download: '#/base/switches',
      date: '12/04/2019'
    }
  ]
  style: any;
  constructor(public router: Router) {
    if (localStorage.getItem('username') !== 'admin') {
      this.style = { 'display': 'none' }
    }
  }

  goto(link : string) {
    var temp = link.slice(1,link.length);
    this.router.navigate([temp]);
  }

  ngOnInit(): void {
  }
}
