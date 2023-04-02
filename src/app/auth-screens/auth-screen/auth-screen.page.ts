import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

@Component({
  selector: 'app-auth-screen',
  templateUrl: './auth-screen.page.html',
  styleUrls: ['./auth-screen.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, SignInComponent, SignUpComponent],
})
export class AuthScreenPage implements OnInit {

  segmentValue = '1';

  constructor() { }

  ngOnInit() {
  }

  segmentChanged(event) {
    console.log(event);
    this.segmentValue = event.detail.value;
  }

}
