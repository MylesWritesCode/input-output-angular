import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.scss']
})
export class CustomerDetailComponent implements OnInit {

  // This should get data from customer.component.ts.
  @Input() customer: any;

  // This will emit an event when there's a change. For now, we'll just use
  // a button that signifies something has changed in the customemr object.
  @Output() customerChanged = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  change() {
    // First, change the customer name. Typically we would get the data through
    // some textbox or something, but hey, what are you gonna do? This is a
    // simple example.
    this.customer.name = "Melanie";

    // Once all the data is nice and packaged, send the customer back up the
    // chain.
    this.customerChanged.emit(this.customer);
  }
}
