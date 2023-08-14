import { Component, OnDestroy, OnInit, } from '@angular/core';

@Component({
  selector: 'app-sale-products',
  templateUrl: './sale-products.component.html',
  styleUrls: ['./sale-products.component.scss']
})
export class SaleProductsComponent implements OnInit, OnDestroy {
  targetDate: Date = new Date('2023-08-08'); // Đặt ngày mục tiêu của bạn ở đây
  remainingTime: any;
  countdownInterval: any;

  ngOnInit() {
    this.startCountdown();
  }

  ngOnDestroy() {
    this.stopCountdown();
  }

  startCountdown() {
    console.log();
    const now = new Date().getTime();
    this.countdownInterval = setInterval(() => {
      const timeDifference = this.targetDate.getTime() - now;

      this.remainingTime = {
        days: Math.floor(timeDifference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((timeDifference % (1000 * 60)) / 1000)
      };
      if (timeDifference <= 0) {
        this.stopCountdown();
      }
    }, 1000);
  }

  stopCountdown() {
    clearInterval(this.countdownInterval);
  }

  constructor() { }

  // navigateToRegistration() {
  //   const propertyBoxSaleElement = this.elementRef.nativeElement.querySelector('#khuyen_mai');
  //   propertyBoxSaleElement.scrollIntoView({ behavior: 'smooth' });
  // }


  itemsPerSlide = 4;

  // slides = [
  //   { image: 'https://i.pinimg.com/originals/58/62/38/58623801a7a70d186cb26f865d90266c.jpg' },
  //   { image: 'https://i.pinimg.com/originals/58/62/38/58623801a7a70d186cb26f865d90266c.jpg' },
  //   { image: 'https://i.pinimg.com/originals/58/62/38/58623801a7a70d186cb26f865d90266c.jpg' },
  //   { image: 'https://i.pinimg.com/736x/4a/5e/e0/4a5ee0f8438b43b1309ebe84f95c97ea.jpg' },
  //   { image: 'https://i.ytimg.com/vi/nE-5PPXjuqg/maxresdefault.jpg' },
  //   { image: 'https://i.pinimg.com/736x/9d/3c/a5/9d3ca5906d602c943f66e9b0d629f82f.jpg' },
  //   { image: 'https://i.pinimg.com/736x/4a/5e/e0/4a5ee0f8438b43b1309ebe84f95c97ea.jpg' },
  //   { image: 'https://i.pinimg.com/736x/9d/3c/a5/9d3ca5906d602c943f66e9b0d629f82f.jpg' },
  //   { image: 'https://coinz.com.vn/wp-content/uploads/2023/01/bunny-rainbow-fan-token-social.jpg' },
  //   { image: 'https://i.pinimg.com/736x/9d/3c/a5/9d3ca5906d602c943f66e9b0d629f82f.jpg' }
  // ];
  sales = [
    {
      image: "https://s3-alpha-sig.figma.com/img/91b8/7c97/3fedd0c420317215d589442c6625147e?Expires=1691971200&Signature=gkJT2jz6PlGOcBijDJBk7-OYavjejuOhVFE1LV6ViSxAyVe9gasCpkl6~BcCjhd19EINILPn827YATFLWOpOqjzDBWqd3MI0bK4RiQs2CZVtkdfAIyUHSwPiM9HqXk8kDKa43k5qT3x3K9-Nz9gSnrtdH9HsgO1Y07XAhfiLxf9W7I~qQulntVI7X1Gy22LMakZOw0xYean7gfNm2XB5wzHhA7LOGlea2EQT2i8cUNEGCArOyeSRkUd10xDPmoUFpQIuF~vWBhvfFg~bLBm24JwQKoEsXzorZu1eWSo0Yr5JXwEwzeOzgW0hwG4pt674EJStrzdCtu0683MNvbhWNw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      title: "Khách sạn Imper Vũng Tàu",
      city: "Thành phố Vũng Tàu",
      status: "Rất tốt",
      price: "2.492.573 VND"
    },
    {
      image: "https://s3-alpha-sig.figma.com/img/0cb4/50f1/f7518579f49908d04e771b6b285dbf61?Expires=1691971200&Signature=lxA9VEbK2WSSrk9JIjvQxs9tuhDZYda7jGmt~-LKZq-NNyT~BtB37SAz22KWX2Wcn0CbPZ7SydfidvrD38u3~p3pZczeExbtnWyG4EKx6vUhqXv1YslaqLFKXH--nYkUwX5FyP5KCBT9sHGLZUHOM8e9QETdf0gdmkYJATen3I7v2z7raoxFb4rTTfZ6t-FjUtLmiKSwzNk66iaeSP4RtfThuGcPukrvrJOUyoTrKxQXvTgHsSxfPW09Ln-WubjP-UquVViPMh7BMnyUMU2izEkxdz9URskG9JyV8viyAMWOaASmY9v3qUok9xYY0kqIwe2tKiXALVpIxu8fBWDJqA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      title: "Đà Nẵng - Mikazuki Japanese Resort",
      city: "Quận Liên Chiểu",
      status: "Tuyệt vời",
      price: "2.121.154 VND"

    },
    {
      image: "https://s3-alpha-sig.figma.com/img/c3af/847a/a26493555425f86d4f7443d12cccdac6?Expires=1691971200&Signature=kMIdXBzxiDPxXVfqRzju0vnZs~PgsAiqEo4lIi9NxA58~L0KcDCQGjLYqiFCioSqyxIAGriOsHX-kk5P-WK0zF2iDzmFTHRHkVfj7FjQfSOS60bLAasvpBx0RrwrhKv~VjpOnDxYQYynxSVZ-~LNUoNngnuwnwmMHB3xXtPME3R-c3dIUIrtSjXql7WJKLR0XwYd169NWx8uNhquvKwt8Eh~plR3KbK4gFaRj3PRGQyqslFXCQVUOXvFcJsDKvuSMGHZvBo07LU4x-IRgelywdzVmYLsygLNzDQW27FnEIKaDAR8NXCW2Lzq0YMApHUN22fix6KykMCk2BpWsoOZug__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      title: "Khu nghỉ dưỡng Melia Núi Ba Vì ",
      city: "Huyện Ba Vì",
      status: "Tuyệt vời",
      price: "3.615.604 VND"

    },
    {
      image: "https://s3-alpha-sig.figma.com/img/7a1c/e011/764ca9e284c24a9a701e91d043cef1d7?Expires=1691971200&Signature=i7gb~vghsGb1SFa-wklDmSLIaI~V9J-OsQSYzLoZboGL05i7vbqrL~D9xp6YF39jlAgmePo800G6MkKx9O4NG3Kt7C1fR2T1eBDl2lN0ejTudoljMB2UXoiLhrdZdloBR5RxfgugpCsvYX0h0GFLHJFsQoMBuJjiigH8MXgcTOZkrAG9SheBya7S8kLqoRqVR5gONmVMfEpbWsVtuZj2yV7oNm6tRG9rfGCxyCl~jnh8Og-o6nuQ7vCuusHkPqeKLVO9abnepv8hm-hQKsyvCyIhVThVBYCQlQMXMhVcIus-~s~Rth2HVwRZ4K91vgGU30rXTUjoHo4sp95s19YdkQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      title: "InterContinental Phú Quốc ",
      city: "Phú Quốc",
      status: "Tuyệt vời",
      price: "4.000.280 VND"

    },

    {
      image: "https://img.tripi.vn/cdn-cgi/image/width=548,height=310/https://www.googleapis.com/download/storage/v1/b/tourcdn/o/photos%2Fthumb_UE8RSZ9H87_uUvzlVINQiiHi-9TlasXqQ-15.jpeg?generation=1612422711703287&alt=media",
      title: "Khách sạn Anya Quy nhơn ",
      city: "Quy Nhơn",
      status: "Tuyệt vời",
      price: "3.00.280 VND"

    },

    {
      image: "https://img.tripi.vn/cdn-cgi/image/width=548,height=310/https://storage.googleapis.com/hms_prod/photo/thumb/456774zEToKw/overview.png",
      title: "Khách sạn citadines Hạ Long ",
      city: "Thành phố Hạ Long",
      status: "Tuyệt vời",
      price: "2.300.280 VND"

    },

    {
      image: "https://img.tripi.vn/cdn-cgi/image/width=548,height=310/https://www.googleapis.com/download/storage/v1/b/tourcdn/o/photos%2FJIZY9DOUB4_%2Ftmp%2Fplaytemp858296023012944501%2FmultipartBody694757521126482023asTemporaryFile?generation=1587699044706126&alt=media",
      title: "Flamingo Đại Lải Resort ",
      city: "Thị xã Phúc Yên",
      status: "Tuyệt vời",
      price: "4.355.280 VND"

    },

    {
      image: "https://img.tripi.vn/cdn-cgi/image/width=548,height=310/https://www.googleapis.com/download/storage/v1/b/tourcdn/o/photos%2FGJGKG9M0WP_%2Ftmp%2Fplaytemp4451784278522770582%2FmultipartBody3634899464400714441asTemporaryFile?generation=1586495920714726&alt=media",
      title: "Novotel Phú Quốc ",
      city: "Phú Quốc",
      status: "Rất tốt",
      price: "1.355.280 VND"

    },
  ]
}
