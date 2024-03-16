import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { Product } from '../../types/product';
import { ProductService } from '../../product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-product',
  standalone: true,
  imports: [MatButtonModule, FormsModule, MatInputModule, ReactiveFormsModule],
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.scss'
})
export class EditProductComponent {
  formBuilder = inject(FormBuilder);
  productForm: FormGroup = this.formBuilder.group({
    id: [''],
    name: ['', [Validators.required, Validators.minLength(5)]],
    brand: ['', [Validators.required]],
    image: [''],
    currentPrice: [''],
    standardPrice: [''],
    discount: [''],
  })
  productService = inject(ProductService);
  activatedRoute = inject(ActivatedRoute);
  toastrservice= inject(ToastrService);
  router = inject(Router);
  ngOnInit() {
    //get data with id in route
    let productId = this.activatedRoute.snapshot.params["id"];
    this.productService.getProductById(productId).subscribe(result => {
      //set old value with patchValue
      this.productForm.patchValue(result);
    });
  }
  editProduct() {
    if (this.productForm.invalid) {
      // alert("Please provide valid information");
      this.toastrservice.error("Please provide valid information in all field")
      return;
    }
    else {
      this.productService.updateProduct(this.productForm.value).subscribe(result => {
        this.toastrservice.success("Product Sucessfully Updated");
        this.router.navigateByUrl("/product/" + this.productForm.value.id);
      })
      console.log(this.productForm.value);
    }
  }
}
