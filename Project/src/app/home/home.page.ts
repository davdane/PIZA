import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  profiles : Array <string> = []

  constructor() {
    this.profiles=['An']
  }

}
