import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserUtil } from 'src/app/utils/user.utils';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent implements OnInit {
  public product: Product;

  constructor(
    private route: Router
  ) { }

  ngOnInit() {
  }

  newProduct() {
    this.product = new Product("", "", 1, "", 1, "");
    this.route.navigate(['create-product']);
  }

  logout() {
    UserUtil.clear();
    this.route.navigate(['login']);
  }
}
