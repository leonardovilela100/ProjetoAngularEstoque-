import { GetAllProductsResponse } from 'src/models/interfaces/products/response/GetAllProductsResponse';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductEvent } from 'src/models/enums/products/ProductEvent';
import { EventAction } from 'src/models/interfaces/products/event/EventAction';
import { DeleteProductAction } from 'src/models/interfaces/products/event/DeleteProductAction';


@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrls: []
})
export class ProductsTableComponent {
  @Input() products: Array<GetAllProductsResponse> = [];
  @Output() productEvent = new EventEmitter<EventAction>();
  @Output() deleteProductEvent = new EventEmitter<DeleteProductAction>();

  public productSelected!: GetAllProductsResponse;

  public addProductEvent = ProductEvent.ADD_PRODUCT_EVENT;
  public editProductEvent = ProductEvent.EDIT_PRODUCT_EVENT;
  public saleProductEvent = ProductEvent.SALE_PRODUCT_EVENT;

  handleProductEvent(action: string, id?: string): void {
    if (action && action !== '') {
      const productEventData = id && id !== '' ? { action, id } : { action };
      this.productEvent.emit(productEventData);
    }
  }

  handleDeleteProdut(product_id: string, productName: string): void {
      if(product_id !== '' && productName !== '' ) {
        this.deleteProductEvent.emit({
          product_id,
          productName
        });
      }
  }
}
