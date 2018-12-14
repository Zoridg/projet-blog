import {Component} from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
    const config = {
      apiKey: "AIzaSyCrjds0oWzCuhMZBAmyzc5s108tvyR-1uU",
      authDomain: "projet-blog-9e0b9.firebaseapp.com",
      databaseURL: "https://projet-blog-9e0b9.firebaseio.com",
      projectId: "projet-blog-9e0b9",
      storageBucket: "projet-blog-9e0b9.appspot.com",
      messagingSenderId: "451538980456"
    };
    firebase.initializeApp(config);
  }

}
