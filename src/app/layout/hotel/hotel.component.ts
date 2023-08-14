import { Component, OnInit } from '@angular/core';
import { title } from 'process';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.scss']
})
export class HotelComponent implements OnInit {
  ngOnInit(): void {

  }
  listTour = [
    {
      id: 1,
      img: "https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/20016481-0fc9c242de2ca7e8fcae8aa7bb1dd3d8.jpeg?_src=imagekit&tr=c-at_max,h-456,q-40,w-256",
      title: "Millennium Hanoi Hotel",
      price: "3.000.000VNĐ"
    },
    {
      id: 2,
      img: "https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/10025235-aef700914b1430ff8defadafeebd93d2.jpeg?_src=imagekit&tr=c-at_max,h-456,q-40,w-256",
      title: "Muong Thanh Hanoi",
      price: "4.000.000VNĐ"
    },
    {
      id: 3, img: "https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/10030146-7b73df32d42f8afd54bc6a98fadaaa50.jpeg?_src=imagekit&tr=c-at_max,h-456,q-40,w-256",
      title: "Hanoi De Masion",
      price: "5.000.000VNĐ"
    },
    {
      id: 4, img: "https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/10030105-a67150adfc6023aa42d40f4563ecb280.jpeg?_src=imagekit&tr=c-at_max,h-456,q-40,w-256",
      title: "Mai chamrming hotel",
      price: "3.500.000VNĐ"
    },
    {
      id: 5,
      img: "https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/20009795-db238d34ffccb8df75276c87913ab008.jpeg?_src=imagekit&tr=c-at_max,h-456,q-40,w-256",
      title: "Version Premier hotel",
      price: "4.000.000VNĐ"
    },
    {
      id: 6,
      img: "https://wecheckin.vn/wp-content/uploads/2019/10/Mo%CC%82c-chau.png",
      title: "HÀ NỘI - MỘC CHÂU",
      price: "2.000.000VNĐ"
    },
    {
      id: 5,
      img: "https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/20009795-db238d34ffccb8df75276c87913ab008.jpeg?_src=imagekit&tr=c-at_max,h-456,q-40,w-256",
      title: "Version Premier hotel",
      price: "4.000.000VNĐ"
    },
    {
      id: 6,
      img: "https://wecheckin.vn/wp-content/uploads/2019/10/Mo%CC%82c-chau.png",
      title: "HÀ NỘI - MỘC CHÂU",
      price: "2.000.000VNĐ"
    },
  ]

  danang = [
    {
      id: 1,
      img: "https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/10019219-09d765a1525d704f2e3e6fcc62e03931.jpeg?_src=imagekit&tr=c-at_max,h-456,q-40,w-256",
      title: "Le House Boutique Hotel",
      price: "3.000.000VNĐ"
    },
    {
      id: 2,
      img: "https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/20004789-a5cf524963f270785dc36a9659125e03.jpeg?_src=imagekit&tr=c-at_max,h-456,q-40,w-256",
      title: "The Herriott Hotel",
      price: "4.000.000VNĐ"
    },
    {
      id: 3, img: "https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/10032529-195054166143e6ca9a7e3da13624fc81.jpeg?_src=imagekit&tr=c-at_max,h-456,q-40,w-256",
      title: "Tarasa Hotel",
      price: "5.000.000VNĐ"
    },
    {
      id: 4, img: "https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/10030105-a67150adfc6023aa42d40f4563ecb280.jpeg?_src=imagekit&tr=c-at_max,h-456,q-40,w-256",
      title: "Mai chamrming hotel",
      price: "3.500.000VNĐ"
    },
    {
      id: 5,
      img: "https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/20009795-db238d34ffccb8df75276c87913ab008.jpeg?_src=imagekit&tr=c-at_max,h-456,q-40,w-256",
      title: "Version Premier hotel",
      price: "4.000.000VNĐ"
    },
    {
      id: 6,
      img: "https://wecheckin.vn/wp-content/uploads/2019/10/Mo%CC%82c-chau.png",
      title: "HÀ NỘI - MỘC CHÂU",
      price: "2.000.000VNĐ"
    },
    {
      id: 7,
      img: "https://wecheckin.vn/wp-content/uploads/2019/10/Mo%CC%82c-chau.png",
      title: "HÀ NỘI - MỘC CHÂU",
      price: "2.000.000VNĐ"
    },
    {
      id: 8,
      img: "https://wecheckin.vn/wp-content/uploads/2019/10/Mo%CC%82c-chau.png",
      title: "HÀ NỘI - MỘC CHÂU",
      price: "2.000.000VNĐ"
    },
  ]
  itemsPerSlide = 4;

  slides = [
    {
      image: 'https://ik.imagekit.io/tvlk/blog/2023/06/canh-dep-nuoc-anh-8.jpg?tr=w-305', title: 'Cảnh đẹp nước anh khiến bao nhiêu du khách mê mẩn'
    },
    {
      image: 'https://ik.imagekit.io/tvlk/blog/2023/06/ho-yamanaka-6.jpg?tr=w-305', title: "Thông tin du lịch hữu ích về hồ Yamanaka Nhật Bản"
    },
    {
      image: 'https://ik.imagekit.io/tvlk/blog/2023/06/canh-dep-tay-ban-nha-27.jpg?tr=w-305', title: "Khám phá những cảnh đẹp Tây Ban Nha không thể bỏ qua",
    },
    {
      image: 'https://ik.imagekit.io/tvlk/blog/2023/06/go-and-share-petaling-street-market-1.jpg?tr=w-305 ', title: "Petaling street Market"
    },
    {
      image: 'https://ik.imagekit.io/tvlk/blog/2023/06/go-and-share-nha-cua-juliet-8.png?tr=w-305',
      title: "Lãng mạn ở Verona: ghé thăm ngôi nhà của Juliet"
    },
    {
      image: 'https://ik.imagekit.io/tvlk/blog/2023/07/go-and-share-du-lich-tuscany-1.jpg?tr=w-305',
      title: "Du lịch Tuscany- Thiên đường gọi tên"
    },
    {
      image: 'https://ik.imagekit.io/tvlk/blog/2023/06/national-gallery-singapore-3.jpg?tr=w-305',
      title: "National Gallery Singapo - Bảo tàng lớn nhất tại Đông Nam Á"
    },
    {
      image: 'https://ik.imagekit.io/tvlk/blog/2023/07/go-and-share-du-lich-kazakhstan-2.jpeg?tr=w-305',
      title: "Du lịch Kazakhstan-Nơi tôi đi tìm những giấc mơ thời trẻ"
    },

  ];
  private router: Router

}
