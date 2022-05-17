import { Component, Input, OnInit } from '@angular/core';
import { Item } from 'src/app/models/fast-models';

@Component({
  selector: 'app-content-item',
  templateUrl: './content-item.component.html',
  styleUrls: ['./content-item.component.scss']
})
export class ContentItemComponent implements OnInit {

  @Input() content!: Item;

  constructor() { }

  ngOnInit(): void {
  }

}
