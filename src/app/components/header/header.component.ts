import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbarModule,MatIconModule,MatButtonModule,RouterLink],
  template: `
    <mat-toolbar color="accent">
    <button mat-icon-button routerLink="/" >
      <mat-icon>home</mat-icon>
    </button>
    <span>SimpleX</span>
  </mat-toolbar>`,
  styles: ``
})
export class HeaderComponent {

}
