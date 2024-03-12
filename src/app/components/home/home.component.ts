import { Component, inject } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { SearchComponent } from '../search/search.component';
import { ProductService } from '../../product.service';
import { Product } from '../../types/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductCardComponent, SearchComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  product: Product[]=[];
  filteredProduct: Product[] = [];
  productService=inject(ProductService);
  //for dynamic routing
  router=inject(Router);
  ngOnInit() {
    this.productService.getProduct().subscribe((result)=>{
      console.log(result);
      this.product=result;
      this.filteredProduct = this.product;
    })
  }
  onViewProduct(event: any) {
    console.log(event);
    //dynamic routing
    this.router.navigateByUrl("/product/"+event)
  }
  onSearch(search: string) {
    console.log(search);
    if(search){
      this.filteredProduct=this.product.filter(x=>x.name.toLowerCase().includes(search.toLowerCase()));
    }
    else{
      this.filteredProduct=this.product;
    }
  }
} 
