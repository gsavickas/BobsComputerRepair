/**
 * Title: app.component.ts
 * Author: Grayton Savickas
 * Date: 27 June 2021
 * Description: App component
 */

 import { Component, OnInit } from '@angular/core';
 import { IWishlistItem } from '../wishlist-item.interface';

 @Component({
   selector: 'app-wishlist',
   templateUrl: './wishlist.component.html',
   styleUrls: ['./wishlist.component.css']
 })
 export class WishlistComponent implements OnInit {

   items: Array<IWishlistItem> = [];

   constructor() { }

   ngOnInit(): void {
   }

   updateItemsHandler(item: IWishlistItem) {
     this.items.push(item);
   }
 }

// import { Component, OnInit } from '@angular/core';
// import { IWishListItem } from '../wishlist-item.interface';

// @Component({
//   selector: 'app-wishlist',
//   templateUrl: './wishlist.component.html',
//   styleUrls: ['./wishlist.component.scss']
// })
// export class WishlistComponent implements OnInit {


//   item: Array<IWishListItem> = [];
//   constructor() { }

//   ngOnInit(): void {
//   }


//   updateItemsHandler(item: IWishlistItem) {
//          console.log('Inside the wishlist.component.ts (parent) - updateItemsHandler() function');
//          console.log(item);
//          this.items.push(item);
//          console.log(this.items);
//        }
// }
