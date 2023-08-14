import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleSummerComponent } from './sale-summer.component';

describe('SaleSummerComponent', () => {
  let component: SaleSummerComponent;
  let fixture: ComponentFixture<SaleSummerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaleSummerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaleSummerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
