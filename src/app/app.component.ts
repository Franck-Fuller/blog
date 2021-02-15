import { Component } from '@angular/core';
import {Post} from './models/post.model';
import firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  post1 : Post = new Post('Mon premier post',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
     5);

  post2 : Post = new Post(
    'Mon deuxième post',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
     0);

  post3 : Post = new Post(
      'Mon troisième post',
     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
     -1);

  posts = [ this.post1, this.post2, this.post3]

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