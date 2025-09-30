import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-appload',
  templateUrl: './appload.page.html',
  styleUrls: ['./appload.page.scss'],
  standalone: false,
})
export class ApploadPage implements OnInit {

  constructor(
    private menuController: MenuController,
    private router: Router
  ) { }

  ionViewWillEnter() {
    // Disable the menu when entering the login page
    this.menuController.enable(false, 'mainMenu'); 
    this.menuController.swipeGesture(false);
  }

  ngOnInit() {
  }


  navigate(){
    this.router.navigate(['/profile']);
  }

}
