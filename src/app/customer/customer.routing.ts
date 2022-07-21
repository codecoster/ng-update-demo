import { Routes } from '@angular/router';
import { CustomerInputComponent } from './customer-input/customer-input.component';
import { CustomerComponent } from './customer-overview/customer.component';

export const CUSTOMER_ROUTES: Routes = [
  {path: '', component: CustomerComponent},
  {path: 'input', component: CustomerInputComponent}
];


