import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-xyz',
  templateUrl: './xyz.component.html',
  styleUrls: ['./xyz.component.css']
})
export class XyzComponent implements OnInit {
  variable = 0;

  test(input: any) {
    console.log('TEST RAN', input);
  }
  constructor() { }

  ngOnInit() {
  }

}
