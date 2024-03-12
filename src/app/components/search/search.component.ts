import { Component, EventEmitter, Output } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-search',
  standalone: true,
  imports: [MatInputModule, MatButtonModule],
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
  inputChange(event:any) {
    console.log("change occured",event.target.value);
    this.text=event.target.value;
  }
  onTyping(event:any) {
    console.log("change occured",event);
  }
}
