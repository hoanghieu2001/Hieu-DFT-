import { Component, Injector, ChangeDetectionStrategy } from '@angular/core';
import { AppComponentBase } from '@shared/app-component-base';
import { appModuleAnimation } from '@shared/animations/routerTransition';
import { StudentDto, StudentManagmentServiceProxy } from '@shared/service-proxies/service-proxies';
import { result } from 'lodash-es';

@Component({
  templateUrl: './about.component.html',
  animations: [appModuleAnimation()],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutComponent extends AppComponentBase {
  studentDto : StudentDto = new StudentDto();
  constructor(injector: Injector,
    private _studentService: StudentManagmentServiceProxy
    ) {
    super(injector);
  }
  AddStudent() {
    this.studentDto.name = 'test';
    this.studentDto.age = 18;
    this.studentDto.class = 'test';
    this._studentService.addAync(this.studentDto).subscribe((result) => {})
  }
}
