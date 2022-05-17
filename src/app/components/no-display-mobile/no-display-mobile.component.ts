import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-no-display-mobile',
  templateUrl: './no-display-mobile.component.html',
  styleUrls: ['./no-display-mobile.component.scss']
})
export class NoDisplayMobileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('NoDisplayMobileComponent ngOnInit hook')
  }

}
