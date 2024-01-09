import { Component } from '@angular/core';
import { WishItem } from 'src/shared/models/wishitem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items: WishItem[] = [
    new WishItem('To learn angular', false),
    new WishItem('Get some tea', true),
    new WishItem('Go see Metallica concert')
  ];


  newWishText = '';

  title = 'EmployeeFile';


  AddNewWish() {
    this.items.push(new WishItem(this.newWishText));
    this.newWishText = '';
    // add Wish to the items array
    // clear the textbox
  }

  toggleItem(item: WishItem) {
    item.IsComplete = !item.IsComplete;
    console.log(item);

  }
}