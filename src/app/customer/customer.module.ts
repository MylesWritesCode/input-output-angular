import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './customer.component';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';

@NgModule({
  declarations: [ CustomerComponent, CustomerDetailComponent ],
  imports: [
    CommonModule
  ],
  exports: [ CustomerComponent ]
})

export class CustomerModule { }
