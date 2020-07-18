import { Component, OnInit } from '@angular/core';
import { DecimalPipe } from '@angular/common';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  providers: [DecimalPipe]
})
export class HomePageComponent implements OnInit {

  constructor(
    private decimalPipe: DecimalPipe
  ) { }


  ngOnInit(): void {
  }

  public amount = 5000;

  get test() {
    return this.decimalPipe.transform(this.amount)
  }

  set test(value) {
    console.log(value)
    this.amount = parseInt(value.replace(',', ''),10)
  }

  public reply() {
    console.log(this.test);
  }
}
