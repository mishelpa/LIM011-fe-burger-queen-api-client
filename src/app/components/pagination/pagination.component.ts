import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  @Output() public numPage = new EventEmitter<string>();
  constructor( ) { }
  ngOnInit(): void {
  }

  getPage(page: string) {
    this.numPage.emit(page);
  }
}
