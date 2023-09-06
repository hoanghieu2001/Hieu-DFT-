import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent {
  totalPrice: number = 0;
  totalParent: number = 0;
  totalBaby: number = 0;
  voucherCode: string = "";
  calculateTotalPrice(event: any) {
    const selectedAdults: number = parseInt(event.target.value, 10);
    const pricePerAdult: number = 3000000; // Giá 3 triệu đồng cho mỗi người lớn
    this.totalParent = selectedAdults * pricePerAdult;
    this.calculateTotal(); // Tính lại tổng giá tiền sau khi thay đổi số lượng người lớn
  }

  babyPrice(event: any) {
    const selectedChildren: number = parseInt(event.target.value, 10);
    const pricePerChild: number = 2000000; // Giá 2 triệu đồng cho mỗi trẻ em
    this.totalBaby = selectedChildren * pricePerChild;
    this.calculateTotal(); // Tính lại tổng giá tiền sau khi thay đổi số lượng trẻ con
  }

  calculateTotal() {
    this.totalPrice = this.totalParent + this.totalBaby; // Tính tổng giá tiền tổng cộng
  }

  constructor(private router: Router) { }
  applyVoucher() {
    // Kiểm tra giá trị voucherCode và tính toán giảm giá
    if (this.voucherCode === "tour4u") {
      this.totalPrice -= 500000; // Giảm 500000 VND
    } else if (this.voucherCode === "hieudeptrai") {
      this.totalPrice -= 800000; // Giảm 800000 VND
    }

    // Đảm bảo tổng tiền không nhỏ hơn 0
    if (this.totalPrice < 0) {
      this.totalPrice = 0;
    }
  }
  hienthithongbao(): void {
    alert('bạn ngu vl')
  }
  shopping() {
    this.router.navigateByUrl('/app/about/shopping');
  }
}
