import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';

const MOCK_STATES = [
  {name: 'Alabama', abbreviation: 'AL'},
  {name: 'Alaska', abbreviation: 'AK'},
  {name: 'American Samoa', abbreviation: 'AS'},
  {name: 'Arizona', abbreviation: 'AZ'},
  {name: 'Arkansas', abbreviation: 'AR'},
  {name: 'California', abbreviation: 'CA'},
  {name: 'Colorado', abbreviation: 'CO'},
  {name: 'Connecticut', abbreviation: 'CT'},
  {name: 'Delaware', abbreviation: 'DE'},
  {name: 'District Of Columbia', abbreviation: 'DC'},
  {name: 'Federated States Of Micronesia', abbreviation: 'FM'},
  {name: 'Florida', abbreviation: 'FL'},
  {name: 'Georgia', abbreviation: 'GA'},
  {name: 'Guam', abbreviation: 'GU'},
  {name: 'Hawaii', abbreviation: 'HI'},
  {name: 'Idaho', abbreviation: 'ID'},
  {name: 'Illinois', abbreviation: 'IL'},
  {name: 'Indiana', abbreviation: 'IN'},
  {name: 'Iowa', abbreviation: 'IA'},
  {name: 'Kansas', abbreviation: 'KS'},
  {name: 'Kentucky', abbreviation: 'KY'},
  {name: 'Louisiana', abbreviation: 'LA'},
  {name: 'Maine', abbreviation: 'ME'},
  {name: 'Marshall Islands', abbreviation: 'MH'},
  {name: 'Maryland', abbreviation: 'MD'},
  {name: 'Massachusetts', abbreviation: 'MA'},
  {name: 'Michigan', abbreviation: 'MI'},
  {name: 'Minnesota', abbreviation: 'MN'},
  {name: 'Mississippi', abbreviation: 'MS'},
  {name: 'Missouri', abbreviation: 'MO'},
  {name: 'Montana', abbreviation: 'MT'},
  {name: 'Nebraska', abbreviation: 'NE'},
  {name: 'Nevada', abbreviation: 'NV'},
  {name: 'New Hampshire', abbreviation: 'NH'},
  {name: 'New Jersey', abbreviation: 'NJ'},
  {name: 'New Mexico', abbreviation: 'NM'},
  {name: 'New York', abbreviation: 'NY'},
  {name: 'North Carolina', abbreviation: 'NC'},
  {name: 'North Dakota', abbreviation: 'ND'},
  {name: 'Northern Mariana Islands', abbreviation: 'MP'},
  {name: 'Ohio', abbreviation: 'OH'},
  {name: 'Oklahoma', abbreviation: 'OK'},
  {name: 'Oregon', abbreviation: 'OR'},
  {name: 'Palau', abbreviation: 'PW'},
  {name: 'Pennsylvania', abbreviation: 'PA'},
  {name: 'Puerto Rico', abbreviation: 'PR'},
  {name: 'Rhode Island', abbreviation: 'RI'},
  {name: 'South Carolina', abbreviation: 'SC'},
  {name: 'South Dakota', abbreviation: 'SD'},
  {name: 'Tennessee', abbreviation: 'TN'},
  {name: 'Texas', abbreviation: 'TX'},
  {name: 'Utah', abbreviation: 'UT'},
  {name: 'Vermont', abbreviation: 'VT'},
  {name: 'Virgin Islands', abbreviation: 'VI'},
  {name: 'Virginia', abbreviation: 'VA'},
  {name: 'Washington', abbreviation: 'WA'},
  {name: 'West Virginia', abbreviation: 'WV'},
  {name: 'Wisconsin', abbreviation: 'WI'},
  {name: 'Wyoming', abbreviation: 'WY'}
];

@Component({
  selector: 'app-customer-input',
  standalone: true,
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule
  ],
  templateUrl: './customer-input.component.html',
  styleUrls: ['./customer-input.component.scss']
})
export class CustomerInputComponent {
  addressForm = this.formBuilder.nonNullable.group({
    company: '',
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    address: ['', Validators.required],
    address2: '',
    city: ['', Validators.required],
    state: ['', Validators.required],
    postalCode: ['', Validators.compose([
      Validators.required, Validators.minLength(5), Validators.maxLength(5)])
    ],
    shipping: ['free', Validators.required]
  });

  hasUnitNumber = false;

  states = MOCK_STATES;

  constructor(private formBuilder: FormBuilder) {
  }

  onSubmit(): void {
    this.addressForm.value.lastName
    alert('Thanks!');
  }
}
