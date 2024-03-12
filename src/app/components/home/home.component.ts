import { Component } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { SearchComponent } from '../search/search.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductCardComponent, SearchComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  product = [{
    "id": "1",
    "brand": "Abc",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgrFOqG6PjPhS0sFukUOQzE4GYBe8e7Rw56Q&s",
    "currentPrice": "200",
    "standardPrice": "400",
    "discount": "50",
    "name": "Helios"
  },
  {
    "id": "2",
    "brand": "Abc",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgrFOqG6PjPhS0sFukUOQzE4GYBe8e7Rw56Q&s",
    "currentPrice": "210",
    "standardPrice": "420",
    "discount": "50",
    "name": "Helios2"
  },
  {
    "id": "3",
    "brand": "Abc",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgrFOqG6PjPhS0sFukUOQzE4GYBe8e7Rw56Q&s",
    "currentPrice": "250",
    "standardPrice": "500",
    "discount": "50",
    "name": "Helios3"
  },
  {
    "id": "4",
    "brand": "Abc",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgrFOqG6PjPhS0sFukUOQzE4GYBe8e7Rw56Q&s",
    "currentPrice": "100",
    "standardPrice": "200",
    "discount": "50",
    "name": "Helios4"
  },
  {
    "id": "5",
    "brand": "Abc",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgrFOqG6PjPhS0sFukUOQzE4GYBe8e7Rw56Q&s",
    "currentPrice": "2000",
    "standardPrice": "4000",
    "discount": "50",
    "name": "Helios5"
  }]
  filteredProduct: any[] = [];
  ngOnInit() {
    this.filteredProduct = this.product;
  }
  onViewProduct(event: any) {
    console.log(event);
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
