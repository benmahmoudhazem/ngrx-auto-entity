import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from 'core/core.module';
import { Account } from 'models/account.model';
import { Customer } from 'models/customer.model';
import { OrderItem } from 'models/order-item.model';
import { Order } from 'models/order.model';
import { Product } from 'models/product.model';
import { OrdersExportsModule } from 'src/app/+orders/exports/orders.exports.module';
import { StateModule } from 'state/state.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomersListComponent } from './components/customers-list/customers-list.component';
import { ProductsBasicTableComponent } from './components/products-basic-table/products-basic-table.component';
import { HomeComponent } from './containers/home/home.component';
import { NotFoundComponent } from './containers/not-found/not-found.component';
import { OrdersPreviewComponent } from './containers/orders-preview/orders-preview.component';
import { RecentProductsComponent } from './containers/recent-products/recent-products.component';
import { TopCustomersComponent } from './containers/top-customers/top-customers.component';
import { MaterialModule } from './material.module';
import { EntityService } from './services/entity.service';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    CustomersListComponent,
    TopCustomersComponent,
    RecentProductsComponent,
    ProductsBasicTableComponent,
    OrdersPreviewComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    CoreModule.forRoot(),
    HttpClientModule,
    StateModule.forRoot(),
    MaterialModule,
    OrdersExportsModule,
    FlexLayoutModule
  ],
  providers: [
    { provide: Account, useClass: EntityService },
    { provide: Customer, useClass: EntityService },
    { provide: Product, useClass: EntityService },
    { provide: Order, useClass: EntityService },
    { provide: OrderItem, useClass: EntityService }
  ]
})
export class AppModule {}
