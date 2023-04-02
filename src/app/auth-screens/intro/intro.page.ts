import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { INTRO_KEY, StorageService } from 'src/app/services/storage/storage.service';
import { Router } from '@angular/router';
import { SwiperOptions } from 'swiper';
import { SwiperModule } from 'swiper/angular';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, SwiperModule]
})
export class IntroPage  implements OnInit {

  slideOpts: SwiperOptions = {};

  constructor(
    private router: Router,
    private storage: StorageService) { }

  ngOnInit() {
    this.animation();
  }

  async goToLogin() {
    await this.storage.setStorage(INTRO_KEY, 'true');
    this.router.navigateByUrl('/auth-screen', { replaceUrl: true });
  }

  animation() {
    this.slideOpts = {
      pagination: { clickable: true },
      keyboard: { enabled: true },
      effect: 'cube'
    };
  }

}