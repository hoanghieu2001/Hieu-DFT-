import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientJsonpModule } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { NgxPaginationModule } from 'ngx-pagination';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceProxyModule } from '@shared/service-proxies/service-proxy.module';
import { SharedModule } from '@shared/shared.module';
import { HomeComponent } from '@app/home/home.component';
import { AboutComponent } from '@app/about/about.component';
// tenants
import { TenantsComponent } from '@app/tenants/tenants.component';
import { CreateTenantDialogComponent } from './tenants/create-tenant/create-tenant-dialog.component';
import { EditTenantDialogComponent } from './tenants/edit-tenant/edit-tenant-dialog.component';
// roles
import { RolesComponent } from '@app/roles/roles.component';
import { CreateRoleDialogComponent } from './roles/create-role/create-role-dialog.component';
import { EditRoleDialogComponent } from './roles/edit-role/edit-role-dialog.component';
// users
import { UsersComponent } from '@app/users/users.component';
import { CreateUserDialogComponent } from '@app/users/create-user/create-user-dialog.component';
import { EditUserDialogComponent } from '@app/users/edit-user/edit-user-dialog.component';
import { ChangePasswordComponent } from './users/change-password/change-password.component';
import { ResetPasswordDialogComponent } from './users/reset-password/reset-password.component';
// layout
import { HeaderComponent } from './layout/header.component';
import { HeaderLeftNavbarComponent } from './layout/header-left-navbar.component';
import { HeaderLanguageMenuComponent } from './layout/header-language-menu.component';
import { HeaderUserMenuComponent } from './layout/header-user-menu.component';
import { FooterComponent } from './layout/footer.component';
import { SidebarComponent } from './layout/sidebar.component';
import { SidebarLogoComponent } from './layout/sidebar-logo.component';
import { SidebarUserPanelComponent } from './layout/sidebar-user-panel.component';
import { SidebarMenuComponent } from './layout/sidebar-menu.component';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { BannerComponent } from './layout/banner/banner.component';
import { PriceCartComponent } from './layout/price-cart/price-cart.component';
import { SaleProductsComponent } from './layout/sale-products/sale-products.component';
import { MultiselectComponent } from './layout/multiselect/multiselect.component';
import { MultiSelectModule } from 'primeng/multiselect';
import { TourComponent } from './layout/tour/tour.component';
import { QrComponent } from './qr/qr.component';
// import { ProductComponent } from './product/product.component';
// import { QRCodeModule } from 'angularx-qrcode';
import { GalleriaModule } from 'primeng/galleria';

import { AccommodationComponent } from './layout/accommodation/accommodation.component'
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ProductComponent } from "./layout/product/product.component"
import { PhotoService } from './layout/product/photoService';
import { HotelComponent } from './layout/hotel/hotel.component';
import { SaleSummerComponent } from './layout/sale-summer/sale-summer.component';
import { FormInformationComponent } from './layout/form-information/form-information.component';
import { CountdownTimerComponent } from './countdown-timer/countdown-timer.component';
import { ProductsComponent } from './layout/products/products.component';
import { ShoppingCartComponent } from './layout/shopping-cart/shopping-cart.component';
import { MatTabsModule } from '@angular/material/tabs';
@NgModule({
    declarations: [

        AppComponent,
        HomeComponent,
        AboutComponent,
        // tenants
        TenantsComponent,
        CreateTenantDialogComponent,
        EditTenantDialogComponent,
        // roles
        RolesComponent,
        CreateRoleDialogComponent,
        EditRoleDialogComponent,
        // users
        UsersComponent,
        CreateUserDialogComponent,
        EditUserDialogComponent,
        ChangePasswordComponent,
        ResetPasswordDialogComponent,
        // layout
        HeaderComponent,
        HeaderLeftNavbarComponent,
        HeaderLanguageMenuComponent,
        HeaderUserMenuComponent,
        FooterComponent,
        SidebarComponent,
        SidebarLogoComponent,
        SidebarUserPanelComponent,
        SidebarMenuComponent,
        BannerComponent,
        PriceCartComponent,
        SaleProductsComponent,
        MultiselectComponent,
        TourComponent,
        QrComponent,
        AccommodationComponent,
        ProductComponent,
        HotelComponent,
        SaleSummerComponent,
        FormInformationComponent,
        CountdownTimerComponent,
        ProductsComponent,
        ShoppingCartComponent,






    ],
    imports:
        [MatTabsModule,
            //     MatCardModule,
            // MatFormFieldModule,
            ModalModule.forRoot(),
            BsDatepickerModule.forRoot(),
            // BsDatepickerModule,
            TypeaheadModule,
            GalleriaModule,
            MultiSelectModule,
            CarouselModule.forRoot(),

            ButtonModule,
            CommonModule,
            FormsModule,
            ReactiveFormsModule,
            HttpClientJsonpModule,
            ModalModule.forChild(),
            BsDropdownModule,
            CollapseModule,
            TabsModule,
            AppRoutingModule,
            ServiceProxyModule,
            SharedModule,
            NgxPaginationModule,
        ],
    providers: [PhotoService]
})
export class AppModule { }
