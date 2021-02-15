import { Component } from '@angular/core';
import {Post} from './models/post.model';
import firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  constructor(){
    const firebaseConfig = {
      apiKey: "AIzaSyDNp3Ozs4zKTjFsE5PPOEhu_dPlxNWCe08",
      authDomain: "blog-6ef2d.firebaseapp.com",
      databaseURL: "https://blog-6ef2d-default-rtdb.firebaseio.com",
      projectId: "blog-6ef2d",
      storageBucket: "blog-6ef2d.appspot.com",
      messagingSenderId: "322145299536",
      appId: "1:322145299536:web:7d4e388ab467ab0ae93555"
    };

    firebase.initializeApp(firebaseConfig);
  }
}