import { Component } from '@angular/core';
import { ProductsService } from './services/products/products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mateo';

  constructor(
    private productService: ProductsService
  ) {}


  ngOnInit() {
    this.productService.getProducts().subscribe(resp => {
      console.log(resp);
    })
  }
}
