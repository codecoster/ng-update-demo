import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerInputComponent } from './customer-input/customer-input.component';
import { CustomerComponent } from './customer-overview/customer.component';

const routes: Routes = [
  {path: '', component: CustomerComponent},
  {path: 'input', component: CustomerInputComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule {
}
