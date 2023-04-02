import { CommonModule } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-empty-screen',
  templateUrl: './empty-screen.component.html',
  styleUrls: ['./empty-screen.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class EmptyScreenComponent implements OnInit {

  @Input() model;

  constructor() { }

  ngOnInit() {}

}
