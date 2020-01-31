import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {PopoverDataService} from './service/popover-data.service';
import {cloneDeep} from 'lodash';
import {CategoriesData, Product} from './interface/categories';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  title = 'tds-popover';
  public categories: any = [];
  public products: Product[];

  constructor(private popoverDataService: PopoverDataService) {
  }

  ngOnInit(): void {
    this.prepareData();
  }

  selectCategory(item: any) {
    item.checked = !item.checked;
  }

  done(item) {
    item.products = this.products;
    // Data can be written to backend as well
  }

  cancel() {
  }

  addProductQuantity(product: any) {
    product.quantity++;
  }

  reduceProductQuantity(product: any) {
    if (product.quantity > 0) {
      product.quantity--;
    }
  }

  totalQuantityOfEachProduct(item: any) {
    const total = item.products.reduce((acc, product) => acc + product.quantity, 0);
    return total || '';
  }

  getProductsCopy(products: any) {
    this.products = cloneDeep(products);
    return this.products;
  }

  private prepareData() {
    this.popoverDataService
      .getCategories()
      .subscribe((categories: CategoriesData) => {
        this.categories = Object.keys(categories.categories)
          .map(category => {
            return {
              key: category,
              products: categories.categories[category].map(value => {
                return {
                  product: value,
                  quantity: 0
                };
              }),
              checked: false
            };
          });
      });
  }
}
