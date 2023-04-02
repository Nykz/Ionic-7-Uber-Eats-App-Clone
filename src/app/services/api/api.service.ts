import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  allRestaurants = [
    {
      id: '1',
      cover: 'assets/dishes/restaurant.jpg',
      name: 'Stayfit',
      cuisines: [
        'Indian',
        'Italian',
        'Mexican'
      ],
      rating: 5,
      delivery_time: 25,
      distance: 2.5,
      price: 100,
      latitude: 0,
      longitude: 0
    },
    {
      id: '2',
      cover: 'assets/dishes/2.jpg',
      name: 'Stayfit1',
      cuisines: [
        'Italian',
        'Mexican',
        'Chinese'
      ],
      rating: 5,
      delivery_time: 25,
      distance: 2.5,
      price: 100
    },
    {
      id: '3',
      cover: 'assets/dishes/3.jpg',
      name: 'Kolkata Roll',
      cuisines: [
        'Italian',
        'Mexican'
      ],
      rating: 5,
      delivery_time: 25,
      distance: 2.5,
      price: 100
    },
  ];
  
  categories = [      
    { id: 1, name: 'North Indian', image: 'assets/dishes/nan.jpg' },
    { id: 2, name: 'Italian', image: 'assets/dishes/pasta.jpg' },
    { id: 3, name: 'Chinese', image: 'assets/dishes/chowmein.jpg' },
    { id: 4, name: 'South Indian', image: 'assets/dishes/dosa.jpg' },
    { id: 5, name: 'Mexican', image: 'assets/dishes/dol.jpg' },
  ];

  allItems = [    
    {
      category_id: "1",
      cover: "assets/dishes/4.jpeg",
      desc: "An Indian dish includes paneer and a tasty gravy, great in taste.",
      id: "1",
      name: "Kadai Paneer",
      price: 250,
      rating: 0,
      status: true,
      uid: "1",
      variation: false,
      veg: true
    },
    {
      category_id: "4",
      cover: "assets/dishes/dosa.jpg",
      desc: "Great in taste",
      id: "2",
      name: "Oats Dosa",
      price: 200,
      rating: 0,
      status: true,
      uid: "1",
      variation: false,
      veg: true
    },
    {
        category_id: "2",
        cover: "assets/dishes/17.jpeg",
        desc: "Great in taste",
        id: "3",
        name: "Burger",
        price: 150,
        rating: 0,
        status: true,
        uid: "1",
        variation: false,
        veg: false
    },
    {
        category_id: "1",
        cover: "assets/dishes/nan.jpg",
        desc: "Great in taste",
        id: "4",
        name: "Nan Paneer",
        price: 200,
        rating: 0,
        status: true,
        uid: "1",
        variation: false,
        veg: true
    },
    {
        category_id: "2",
        cover: "assets/dishes/pasta.jpg",
        desc: "Great in taste",
        id: "5",
        name: "Pasta",
        price: 250,
        rating: 0,
        status: true,
        uid: "1",
        variation: false,
        veg: false
    },    
    {
      category_id: "3",
      cover: "assets/dishes/chinese2.jpg",
      desc: "Great in taste",
      id: "6",
      name: "Chinese Momo",
      price: 160,
      rating: 0,
      status: true,
      uid: "1",
      variation: false,
      veg: true
    },
    {
        category_id: "3",
        cover: "assets/dishes/chowmein.jpg",
        desc: "Great in taste",
        id: "7",
        name: "Chowmein",
        price: 200,
        rating: 0,
        status: true,
        uid: "1",
        variation: false,
        veg: false
    },
    {
        category_id: "5",
        cover: "assets/dishes/fryjpg.jpg",
        desc: "Great in taste",
        id: "8",
        name: "Egg fry",
        price: 60,
        rating: 0,
        status: true,
        uid: "1",
        variation: false,
        veg: true
    },
    {
      category_id: "5",
      cover: "assets/dishes/13.jpeg",
      desc: "Great in taste",
      id: "9",
      name: "Macho Nachos",
      price: 399,
      rating: 0,
      status: true,
      uid: "1",
      variation: false,
      veg: true
    },
    {
      category_id: "4",
      cover: "assets/dishes/gaz.jpg",
      desc: "Great in taste",
      id: "10",
      name: "Tomato Soup",
      price: 120,
      rating: 0,
      status: true,
      uid: "1",
      variation: false,
      veg: true
    },
    {
      category_id: "5",
      cover: "assets/dishes/10.jpeg",
      desc: "Great mexican roll includes mayoneese, capsicum, leaf and a lot of vegetables",
      id: "11",
      name: "Mexican Roll",
      price: 120,
      rating: 0,
      status: true,
      uid: "1",
      variation: false,
      veg: true
    },
  ];

  // favorites = [
  //   {
  //     id: '1',
  //     cover: 'assets/dishes/restaurant.jpg',
  //     name: 'Stayfit',
  //     cuisines: [
  //       'Indian',
  //       'Italian',
  //       'Mexican'
  //     ],
  //     rating: 5,
  //     delivery_time: 25,
  //     distance: 2.5,
  //     price: 100,
  //     latitude: 0,
  //     longitude: 0
  //   },
  //   {
  //     id: '2',
  //     cover: 'assets/dishes/2.jpg',
  //     name: 'Stayfit1',
  //     cuisines: [
  //       'Italian',
  //       'Mexican',
  //       'Chinese'
  //     ],
  //     rating: 5,
  //     delivery_time: 25,
  //     distance: 2.5,
  //     price: 100
  //   },
  //   {
  //     id: '3',
  //     cover: 'assets/dishes/3.jpg',
  //     name: 'Kolkata Roll',
  //     cuisines: [
  //       'Italian',
  //       'Mexican'
  //     ],
  //     rating: 5,
  //     delivery_time: 25,
  //     distance: 2.5,
  //     price: 100
  //   },
  // ];
  // offers = [
  //   {
  //     id: '1',
  //     cover: 'assets/dishes/3.jpg',
  //     name: 'Kolkata Roll',
  //     cuisines: [
  //       'Italian',
  //       'Mexican'
  //     ],
  //     rating: 5,
  //     delivery_time: 25,
  //     distance: 2.5,
  //     price: 100
  //   },
  //   {
  //     id: '2',
  //     cover: 'assets/dishes/2.jpg',
  //     name: 'Stayfit1',
  //     cuisines: [
  //       'Italian',
  //       'Mexican',
  //       'Chinese'
  //     ],
  //     rating: 5,
  //     delivery_time: 25,
  //     distance: 2.5,
  //     price: 100
  //   },
  //   {
  //     id: '3',
  //     cover: 'assets/dishes/restaurant.jpg',
  //     name: 'Stayfit',
  //     cuisines: [
  //       'Indian',
  //       'Italian',
  //       'Mexican'
  //     ],
  //     rating: 5,
  //     delivery_time: 25,
  //     distance: 2.5,
  //     price: 100,
  //     latitude: 0,
  //     longitude: 0
  //   },
  // ];
  // nearby = [
  //   {
  //     id: '1',
  //     cover: 'assets/dishes/restaurant.jpg',
  //     name: 'Stayfit',
  //     cuisines: [
  //       'Indian',
  //       'Italian',
  //       'Mexican'
  //     ],
  //     rating: 5,
  //     delivery_time: 25,
  //     distance: 2.5,
  //     price: 100,
  //     latitude: 0,
  //     longitude: 0
  //   },
  //   {
  //     id: '2',
  //     cover: 'assets/dishes/2.jpg',
  //     name: 'Stayfit1',
  //     cuisines: [
  //       'Italian',
  //       'Mexican',
  //       'Chinese'
  //     ],
  //     rating: 5,
  //     delivery_time: 25,
  //     distance: 2.5,
  //     price: 100
  //   },
  //   {
  //     id: '3',
  //     cover: 'assets/dishes/3.jpg',
  //     name: 'Kolkata Roll',
  //     cuisines: [
  //       'Italian',
  //       'Mexican'
  //     ],
  //     rating: 5,
  //     delivery_time: 25,
  //     distance: 2.5,
  //     price: 100
  //   },
  // ];
  

  constructor() { }
}
