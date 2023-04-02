import { Component, OnInit, Input } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss'],
  standalone: true,
  imports: [IonicModule]
})
export class RestaurantComponent implements OnInit {

  @Input() restaurant;

  constructor() { }

  ngOnInit() {}

  getCuisines(data) {
    return data.join(', ');
  }

}
