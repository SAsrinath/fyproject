// import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { BrowserModule } from '@angular/platform-browser';


// @Component({
//   selector: 'app-root',
//   imports: [CommonModule,SlideshowComponent],
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'My Angular App';

//   modalVisible = false;
//   modalDescription = '';
//   modalImageUrl = '';

//   showDetails(description: string, imageUrl: string) {
//     this.modalDescription = description;
//     this.modalImageUrl = imageUrl;
//     this.modalVisible = true;
//   }

//   closeModal() {
//     this.modalVisible = false;
//   }
// }

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [CommonModule,SlideshowComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Angular App';

  modalVisible: boolean = false;
  modalDescription: string = '';
  modalImageUrl: string = '';

  // Method to show product details in the modal
  showDetails(description: string, imageUrl: string): void {
    this.modalDescription = description;
    this.modalImageUrl = imageUrl;
    this.modalVisible = true;
  }

  // Method to close the modal
  closeModal(): void {
    this.modalVisible = false;
  }
}
