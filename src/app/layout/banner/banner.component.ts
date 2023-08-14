import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';
// import {TourComponent} from '@app/layout/tour/tour.component';
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
  providers: [
    { provide: CarouselConfig, useValue: { interval: 3000, noPause: true, showIndicators: true } }
  ]
})
export class BannerComponent {

  @Output() valueSearch: EventEmitter<string> = new EventEmitter<string>();

  selected = '';
  states: string[] = [
    'Việt Nam',
    'Thai Lan',
    'Ba la hill',
    'Phú Quốc',
    'Đà Nẵng',
    'Black pink',
    'Cần thơ',
    'Đà Lạt',
    'Thái Bình',
    'Chùa keo',
    'Singapo',
    'Idaho',
    'Mianma',
    'Indiana',
    'Trung Quốc',
    'Hà Nội',
    'Hải phòng',
    '',
    'Maine',
    'Maryland',
    'Massachusetts',
    'Michigan',
    'Minnesota',
    'Mississippi',
    'Missouri',
    'Montana',
    'Nebraska',
    'Nevada',
    'New Hampshire',
    'New Jersey',
    'New Mexico',
    'New York',
    'North Dakota',
    'North Carolina',
    'Ohio',
    'Oklahoma',
    'Oregon',
    'Pennsylvania',
    'Rhode Island',
    'South Carolina',
    'South Dakota',
    'Tennessee',
    'Texas',
    'Utah',
    'Vermont',
    'Virginia',
    'Washington',
    'West Virginia',
    'Wisconsin',
    'Wyoming'
  ];
  bsValue = new Date();
  bsRangeValue: Date[];
  maxDate = new Date();
  constructor() {
    this.maxDate.setDate(this.maxDate.getDate() + 7);
    this.bsRangeValue = [this.bsValue, this.maxDate];
  }

  test() {
    this.valueSearch.emit(this.selected);
  }

}
