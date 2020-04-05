import { Component } from '@angular/core';


@Component({
  selector: 'app-pages-order',
  templateUrl: './pages-order.component.html',
  styleUrls: ['./pages-order.component.scss']
})
export class PagesOrderComponent {
  public type: string;

  constructor() {
   }

  typeDesayuno() {
    this.type = 'Desayuno';
  }
  typeCena() {
    this.type = 'Almuerzo y cena';
  }
}
