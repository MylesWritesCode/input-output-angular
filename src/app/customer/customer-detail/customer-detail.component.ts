import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

// Below in the component decorator, we add change detection to the mix.
// This makes it so that this component doesn't update the data unless
// an event is fired. Check notion.so notes for more.
@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
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
