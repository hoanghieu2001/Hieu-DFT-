import { Component, ChangeDetectionStrategy, TemplateRef, ViewChild, AfterViewInit, AfterViewChecked, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { TourComponent } from './tour/tour.component';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {

  @Output() valueSearch: EventEmitter<string> = new EventEmitter<string>();

  private router: Router;
  modalRef?: BsModalRef;
  constructor(private modalService: BsModalService) { }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  search(name) {
    this.valueSearch.emit(name);
  }

  cacTourTrongNuoc() {
    this.router.navigate(['app/about/cac-tour-trong-nuoc']);
  }
}
