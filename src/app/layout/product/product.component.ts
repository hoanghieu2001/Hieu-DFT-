import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PhotoService } from '../product/photoService'
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {


  images: any[] | undefined;

  responsiveOptions: any[] | undefined;


  constructor(private photoService: PhotoService, private modalService: BsModalService,
    private router: Router,) { }

  ngOnInit() {
    // this.photoService.getImages().then((images) => (this.images = images));
    this.photoService.getImages()
      .then((images) => {
        this.images = images;
      })
      .catch((error) => {
        console.error('Lỗi khi lấy danh sách hình ảnh:', error);
      });

    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 5
      },
      {
        breakpoint: '768px',
        numVisible: 3
      },
      {
        breakpoint: '560px',
        numVisible: 1
      }
    ];
  }

  khudulich() {
    this.router.navigateByUrl('/app/about/thanh-toan');
  }
  modalRef?: BsModalRef;

}
