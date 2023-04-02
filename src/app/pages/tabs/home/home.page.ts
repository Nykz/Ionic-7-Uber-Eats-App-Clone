import { AfterContentChecked, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, PopoverController } from '@ionic/angular';
// import Swiper core and required modules
import SwiperCore, { SwiperOptions, Autoplay, Pagination } from 'swiper';
import { GlobalService } from 'src/app/services/global/global.service';
import { ApiService } from 'src/app/services/api/api.service';
import { PopoverComponent } from './popover/popover.component';
import { RestaurantComponent } from 'src/app/components/restaurant/restaurant.component';
import { RouterModule } from '@angular/router';
import { SwiperModule } from 'swiper/angular';
// install Swiper modules
SwiperCore.use([Autoplay, Pagination]);

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterModule, SwiperModule, RestaurantComponent]
})
export class HomePage implements OnInit, AfterContentChecked {

  loc = 'Locating...';
  banners: any[] = [];
  categories: any[] = [];
  favorites: any[] = [];
  offers: any[] = [];
  nearby: any[] = [];
  bannerConfig: SwiperOptions;
  categoryConfig: SwiperOptions;
  restaurantConfig: SwiperOptions;

  constructor(
    public popoverController: PopoverController,
    private global: GlobalService,
    private api: ApiService
  ) { }

  ngOnInit() {
    this.banners = [
      {banner: 'assets/dishes/11.jpeg'},
      {banner: 'assets/dishes/3.jpg'},
      {banner: 'assets/dishes/cab.jpg'},
    ];
    this.categories = this.api.categories;
    this.favorites = this.api.allRestaurants;
    const offers = [...this.api.allRestaurants];
    this.offers = offers.sort((a,b) => parseInt(b.id) - parseInt(a.id));
    this.nearby = this.api.allRestaurants;
    this.getCurrentLocation();
  }

  ngAfterContentChecked() {
    this.bannerConfig = {
      slidesPerView: 1.2,
      spaceBetween: 10,
      centeredSlides: true,
      initialSlide: this.banners?.length > 1 ? 1 : 0,
      autoplay: {
        delay: 3000
      },
      pagination: { clickable: true }
    };
    this.categoryConfig = {
      slidesPerView: 3.5
    };
    this.restaurantConfig = {
      slidesPerView: 1.1
    };
  }

  async getCurrentLocation() {
    try {
      const coordinates = await this.global.getCurrentLocation();
      console.log('Current position:', coordinates);
      this.getAddress(coordinates);
    } catch(e) {
      console.log(e);
      this.openPopover();
    }
  }

  async getAddress(coordinates) {
    try {
      const address = await this.global.reverseGeocoder(coordinates.coords.latitude, coordinates.coords.longitude);
      console.log('address: ', address);
      this.loc = 
        (address?.areasOfInterest[0] ? address?.areasOfInterest[0] + ', ' : '') + 
        (address?.subLocality ? address?.subLocality + ', ' : '') + 
        (' - ' + address?.postalCode + ', ') + 
        (address?.locality + ', ') + 
        (address?.administrativeArea ? address?.administrativeArea + ', ' : '') + 
        (address?.countryName);
        
      const coords = await this.global.forwardGeocoder(this.loc);
      console.log('forward geocoder result: ', coords);
    } catch(e) {
      console.log(e);
    }
  }

  openPopover() {
    const ev = {
      target: {
        getBoundingClientRect: () => {
          return {
            left: 5
          };
        }
      }
    };
    this.presentPopover(ev);
  }

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: PopoverComponent,
      cssClass: 'custom-popover',
      event: ev,
      translucent: true
    });
    await popover.present();
  
    const { data } = await popover.onDidDismiss();
    console.log('onDidDismiss resolved with data', data);
    if(data) {
      this.enableLocation();
    } else {
      this.loc = 'Karol Bagh, Delhi';
    }
  }  

  async enableLocation() {
    try {
      const status = await this.global.requestLocationPermission();
      console.log(status);
      if(status?.location == 'granted') {
        const stat = await this.global.enableLocation();
        if(stat) {
          const coordinates = await this.global.getCurrentLocation();
          console.log(coordinates);
          this.getAddress(coordinates);
        }
      }
    } catch(e) {
      console.log(e);
    }
  }

  async requestGeolocationPermission() {
    try {
      const status = await this.global.requestLocationPermission();
      console.log(status);
      if(status?.location == 'granted') this.getCurrentLocation();
      else this.loc = 'Karol Bagh, Delhi';
    } catch(e) {
      console.log(e);
    }
  }

}