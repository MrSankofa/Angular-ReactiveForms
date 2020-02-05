import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';

import { Customer } from './customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customerForm: FormGroup;
  customer = new Customer();

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.customerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: [{value: 'n/a', disabled: true}, Validators.required],
      email: ['', Validators.required],
      sendCatalog: true
    });
  }

  save(customerForm: NgForm) {
    console.log('Saved: ' + JSON.stringify(customerForm.value));
  }
}
