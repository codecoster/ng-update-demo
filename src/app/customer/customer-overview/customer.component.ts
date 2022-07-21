import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, UntypedFormControl, UntypedFormGroup } from '@angular/forms';

@Component({
  selector: 'app-customer',
  standalone: true,
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  customerForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl('foo@bar.com', {nonNullable: true})
  })

  constructor() {
  }

  ngOnInit(): void {
    this.customerForm.getRawValue().email;
    this.customerForm.reset();
  }

}
