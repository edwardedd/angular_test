import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  items = [
    {
      id: 1,
      name: 'article 1',
      label: 'ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      price: 25
    },
    {
      id: 2,
      name: 'article 2',
      label: 'ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      price: 35
    },
    {
      id: 3,
      name: 'article 3',
      label: 'ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      price: 45
    },
  ];
  

  addToCart(rew) {
    let wq = rew;
    // console.log(wq);
    let mas_arr = {
      'id': rew,
      'quantity': +1,
    };

    this.items.forEach(item_cart => {
      // console.log(item_cart.id);
      if (item_cart.id == wq)
      localStorage.setItem("mas_arr", JSON.stringify(mas_arr));
    
    })
  

  }

  constructor() { 
    
  }

  ngOnInit() {
  }

}
