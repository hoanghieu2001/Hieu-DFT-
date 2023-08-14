import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent {
    totalPrice: number = 0;

    calculateTotalPrice(event: any) {
        const selectedAdults: number = event.target.value;
        const pricePerAdult: number = 3000000; // Giá 3 triệu đồng cho mỗi người lớn
        this.totalPrice = selectedAdults * pricePerAdult;
    }
    babyPrice(event: any) {
        const selectedChildren: number = event.target.value;
        const pricePerChild: number = 2000000;
        this.totalPrice = (selectedChildren * pricePerChild);
    }

  constructor(private router: Router) { }

  shopping() {
    this.router.navigateByUrl('/app/about/shopping');
  }
}
