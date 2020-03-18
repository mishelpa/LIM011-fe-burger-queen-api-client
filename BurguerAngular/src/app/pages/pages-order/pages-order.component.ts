import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-pages-order',
  templateUrl: './pages-order.component.html',
  styleUrls: ['./pages-order.component.scss']
})
export class PagesOrderComponent implements OnInit {
  public type: string;

  constructor() {
   }

  ngOnInit(): void {
  }
  typeDesayuno() {
    this.type = 'Desayuno';
  }
  typeCena() {
    this.type = 'Almuerzo y cena';
  }
}
