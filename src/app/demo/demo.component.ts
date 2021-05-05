import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss'],
})
export class DemoComponent implements OnInit {
  title = 'platzi-store';
  power = 10;

  items = ['Christian', 'Barbara', 'Catherine', 'Paola'];

  addItem(): void {
    this.items.push('nuevo item');
  }

  deleteItem(index: number): void {
    this.items.splice(index, 1);
  }
  constructor() {}

  ngOnInit(): void {}
}
