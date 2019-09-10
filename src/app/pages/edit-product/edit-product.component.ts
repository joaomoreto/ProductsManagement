import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  id: string;
  public product: Product;

  constructor(
    public route: ActivatedRoute,
    private service: DataService
  ) {
  }

  ngOnInit() {
    // this.id = this.route.snapshot.paramMap.get("code");
    // console.log(this.id);

    // this.service.getByCode(this.id)
    //   .subscribe(
    //     (res: Product) => {
    //       this.product = res;
    //     }
    //   )

    // console.log(this.product);

    let session = sessionStorage.getItem('product');
    this.product = JSON.parse(session);
  }
}
