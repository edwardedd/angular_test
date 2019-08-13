import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  quantity;

  items = [
    {
      id: 1,
      name: 'article 1',
      label: 'ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      price: 25,
      quantity: 0
    },
    {
      id: 2,
      name: 'article 2',
      label: 'ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      price: 35,
      quantity: 0
    },
    {
      id: 3,
      name: 'article 3',
      label: 'ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      price: 45,
      quantity: 0
    },
  ];
 
 
  cart_val = JSON.parse(localStorage.getItem("mas_arr"));   
  
  addQuantity(vall){ 
   
   this.items.forEach(function(e){
     if(e.id === vall){
       e.quantity = e.quantity +1;
      //  e.push(e.quantity);
       console.log (e);
       
     }
    

   })
   
  }
  

  constructor() { }

  ngOnInit() {
    
  }

}
