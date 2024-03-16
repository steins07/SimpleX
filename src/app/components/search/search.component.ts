import { Component, EventEmitter, Output } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-search',
  standalone: true,
  imports: [MatInputModule, MatButtonModule,FormsModule,RouterLink],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
  @Output() search=new EventEmitter<string>();
  onSearch() {
    console.log("search");
    this.search.emit(this.text);
  }
  text=""
  //removed due to two way binding
  // inputChange(event:any) {
  //   // this.text=event.target.value;
  //   // console.log("change occured",event.target.value);
  //   console.log("change occured",this.text);
  // }
  // onTyping(event:any) {
  //   console.log("change occured",event);
  // }
}
