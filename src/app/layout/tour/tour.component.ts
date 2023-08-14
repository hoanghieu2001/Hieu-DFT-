import { EventListenerFocusTrapInertStrategy } from '@angular/cdk/a11y';
import { Component, OnInit, ChangeDetectionStrategy, TemplateRef, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Console, log } from 'console';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
    selector: 'app-tour',
    templateUrl: './tour.component.html',
    styleUrls: ['./tour.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,

})
export class TourComponent implements OnInit {

    name = '';
    colors = [
        { color: 'primary', textColor: 'primary' },
        { color: 'secondary', textColor: 'secondary' },
        { color: 'success', textColor: 'success' },
        { color: 'danger', textColor: 'danger' },
        { color: 'warning', textColor: 'warning' },
        { color: 'info', textColor: 'info' },
        { color: 'light' },
        { color: 'dark' }
    ];
    listTour = [
        {
            id: 1,
            img: 'https://images.unsplash.com/photo-1597811209390-e674b6a68775?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=877&q=80',
            title: 'COMBO HÀ NỘI- NHÀ TRANG',
            price: '3.000.000VNĐ',
            price2: 200,

        },
        {
            id: 2,
            img: 'https://images.unsplash.com/photo-1432889490240-84df33d47091?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80',
            title: 'COMBO THÁI BÌNH - MŨI NÉ',
            price: '4.000.000VNĐ',
            price2: 200,
        },
        {
            id: 3,
            img: 'https://images.unsplash.com/photo-1586595276832-b6840c79bdfc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
            title: 'COMBO HÀ NỘI - ĐÀ LẠT',
            price: '5.000.000VNĐ',
            price2: 200,
        },
        {
            id: 4,
            img: 'https://images.unsplash.com/photo-1575986767340-5d17ae767ab0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1033&q=80',
            title: 'HẢI DƯƠNG - HẠ LONG',
            price: '3.500.000VNĐ',
            price2: 200,
        },
        {
            id: 5,
            img: 'https://images.unsplash.com/photo-1609597254239-d9ace3c0b39c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=917&q=80',
            title: 'COMBO HÀ NỘI - PHÚ QUỐC',
            price: '4.000.000VNĐ',
            price2: 300,
        },
        {
            id: 6,
            img: 'https://wecheckin.vn/wp-content/uploads/2019/10/Mo%CC%82c-chau.png',
            title: 'SÀI GÒN - MỘC CHÂU',
            price: '2.000.000VNĐ',
            price2: 200,
        },
    ];
    newlist = [];
    // modalRef?: BsModalRef;

    constructor(private modalService: BsModalService,
        private router: Router,
    ) {
    }

    ngOnInit(): void {
        this.sortData(100);

    }

    // getDataSearch(name) {
    //     if (name !== '') {

    //         this.listTour = this.listTour.filter(e => e.title.toLowerCase().includes(name.toLowerCase()));
    //         this.sortData(100);
    //     }
    //     // else if (name === '') {
    //     //     return alert('Please select')
    //     // }
    //     // else {
    //     //     return alert('ngu dốt')
    //     // }

    // }
    getDataSearch(name) {
        if (name !== '') {
            this.listTour = this.listTour.filter(e => e.title.toLowerCase().includes(name.toLowerCase()));
            this.sortData(100);

            if (this.listTour.length === 0) {
                // in thông báo
                this.sortData(100);
                alert('Không còn tour nào phù hợp');
                // tạo lại danh sách


            }
        }
    }

    khudulich() {
        this.router.navigateByUrl('/app/about/chi-tiet-khu-du-lich');
    }

    // sortData(number2: number) {
    //     this.newlist = (this.listTour.filter(e => e.price2 >= number2));
    // }
    searchTerm: string = '';

    onSearch(value: string) {
        // Gán giá trị tìm kiếm vào biến searchTerm
        this.searchTerm = value;
        // Gọi hàm sortData để lọc dữ liệu tìm kiếm theo giá
        this.sortData(0);
    }



    sortData(number2: number) {
        if (this.searchTerm.trim() === '') {
            // Nếu không có giá trị tìm kiếm, lọc theo giá
            this.newlist = this.listTour.filter(e => e.price2 >= number2);
        } else {
            // Nếu có giá trị tìm kiếm, lọc theo tên và giá
            this.newlist = this.listTour.filter(e =>
                e.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                e.price.toLowerCase().includes(this.searchTerm.toLowerCase()) && e.price2 >= number2
            );
        }
    }

}
