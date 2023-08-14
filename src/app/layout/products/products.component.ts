// Thanh tìm kiếm
import { Component, OnInit } from '@angular/core';


interface Product {
  id: number;
  name: string;
  price: number;
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  products: Product[] = [
    { id: 1, name: 'Laptop Dell XPS 13', price: 1200 },
    { id: 2, name: 'Smartphone Samsung Galaxy S21', price: 999 },
    { id: 3, name: 'Tablet iPad Air', price: 699 },
    { id: 4, name: 'Headphones Sony WH-1000XM4', price: 349 },
    { id: 5, name: 'Camera Canon EOS R6', price: 2499 }
  ];

  searchText: string = '';
  filteredProducts: Product[] = [];

  filterProducts(event) {
    if (event === "") {
      this.filteredProducts = [];
    }
    else {
      console.log((this.products.filter(e => e.name.toLowerCase().includes(event.toLowerCase()))));
      let productNew = this.products.filter(e => e.name.toLowerCase().includes(event.toLowerCase()));
      this.filteredProducts = productNew;
    }

  }
}
