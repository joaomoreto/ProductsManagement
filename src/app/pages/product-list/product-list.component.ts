import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { DataService } from 'src/app/data.service';
import { Router } from '@angular/router';
import { Result } from 'src/app/models/result.model';
import { FormGroup } from '@angular/forms';
import { preserveWhitespacesDefault } from '@angular/compiler';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  public products: Product[];
  public product: Product;
  public form: FormGroup;

  constructor(
    private service: DataService,
    private route: Router,
  ) { }

  ngOnInit() {
    this.service.get()
      .subscribe(
        (res: any) => {
          this.products = res;
        }
      )
  }

  select(product: Product) {
    console.log(product);

    this.product = product;

    sessionStorage.setItem('product', JSON.stringify(this.product));

    this.route.navigate(['edit-product', product.code]);
  }

  delete(product: Product) {
    console.log(product);

    this.service
      .delete(product)
      .subscribe(
        (res: Result) => {
          console.log(res.message)
        },
        (err) => {
          console.log(err.message);
        },
        () => { }
      )
  };

  newProduct() {
    this.product = new Product("", "", 1, "", 1, "");

    this.product = this.product;

    this.route.navigate(['create-product']);
  }
}
