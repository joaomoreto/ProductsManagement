import { Component, OnInit, SimpleChanges, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Result } from 'src/app/models/result.model';
import { DataService } from 'src/app/data.service';
import { Product } from 'src/app/models/product.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editor-product',
  templateUrl: './editor-product.component.html',
  styleUrls: ['./editor-product.component.css']
})
export class EditorProductComponent implements OnInit {
  @Input() product: Product = new Product("", "", 1, "", 1, "");
  public form: FormGroup;
  public categories: any[] = [];
  public id: string;

  constructor(
    private fb: FormBuilder,
    public service: DataService,
    private route: Router,
    private routeTeste: ActivatedRoute
  ) {
    this.form = this.fb.group({
      code: [this.product.code, Validators.compose([
        Validators.minLength(6),
        Validators.maxLength(6),
        Validators.required])],
      title: [this.product.title],
      price: [this.product.price],
      description: [this.product.description],
      quantity: [this.product.quantity],
      category: [this.product.category]
    })
  }

  ngOnInit() {
    this.categories.push({ category: "Produto 1" });
    this.categories.push({ category: "Produto 2" });
    this.categories.push({ category: "Produto 3" });
    this.categories.push({ category: "Produto 4" });
  }

  ngOnChanges(changes: SimpleChanges) {
    this.form.controls['code'].setValue(this.product.code);
    this.form.controls['title'].setValue(this.product.title);
    this.form.controls['price'].setValue(this.product.price);
    this.form.controls['description'].setValue(this.product.description);
    this.form.controls['quantity'].setValue(this.product.quantity);
    this.form.controls['category'].setValue(this.product.category);
  }

  add() {
    this.form.disable();

    this.service
      .save(this.form.value)
      .subscribe(
        (res: Result) => {
          console.log(res.message);
          alert(res.message);

          this.route.navigate(['']);

        },
        (err) => {
          console.log(err.message);
          this.form.enable();
        },
        () => {
          this.form.enable();
        }
      )
  };

  update() {
    this.form.disable();

    this.service
      .update(this.form.value)
      .subscribe(
        (res: Result) => {
          console.log(res.message);
          alert(res.message);

          this.route.navigate(['']);

        },
        (err) => {
          console.log(err.message);
          this.form.enable();
        },
        () => {
          this.form.enable();
        }
      )
  };

  delete() {
    this.service
      .delete(this.form.value)
      .subscribe(
        (res: Result) => {
          console.log(res.message)
        },
        (err) => {
          console.log(err.message);
          this.form.enable();
        },
        () => {
          this.form.enable();
        }
      )
  };

  back() {
    this.route.navigate(['']);
  }
}
