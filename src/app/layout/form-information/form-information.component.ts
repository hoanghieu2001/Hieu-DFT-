import { Component, HostListener, ViewChild } from '@angular/core';
import { BsDatepickerDirective } from 'ngx-bootstrap/datepicker';
import { BsDropdownConfig } from 'ngx-bootstrap/dropdown';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-form-information',
  templateUrl: './form-information.component.html',
  styleUrls: ['./form-information.component.scss']
})
export class FormInformationComponent {
  @ViewChild(BsDatepickerDirective, { static: false }) datepicker?: BsDatepickerDirective;

  @HostListener('window:scroll')
  onScrollEvent() {
    this.datepicker?.hide();
  }
  private router: Router;

    //  khachHang = {
    //     hoTen: '',
    //     email: ''
    // };
    //
    //
    // submitForm() {
    //     if (this.thongTinForm.valid) {
    //         // Xử lý khi form hợp lệ
    //         console.log('Thông tin khách hàng:', this.khachHang);
    //     } else {
    //         // Xử lý khi form không hợp lệ
    //         console.log('Vui lòng kiểm tra thông tin và điền đúng.');
    //     }
    // }



}
