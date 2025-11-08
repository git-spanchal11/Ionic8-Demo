import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Techanologies } from './dataModels/model';
import { JsonDataService } from './services/dataService/JsonDataService';
 import { register } from 'swiper/element/bundle';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent implements OnInit {
  
  techanologies!: Observable<Techanologies[]>;
  constructor(private jsonDataService: JsonDataService) {
     register();
  }

  ngOnInit() {
    this.techanologies = this.jsonDataService.getTechnologies();
  }
}
