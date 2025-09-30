import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  standalone: false
})
export class ProfilePage implements OnInit {
  
  constructor(private menuController: MenuController) {
    
  }

  ngOnInit() {
    this.menuController.enable(true, 'mainMenu'); 
  }

}
