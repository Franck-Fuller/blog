import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import {Post} from '../models/post.model';
import firebase from 'firebase';

@Injectable()
export class PostService {
  
  private posts : Post[]
  postsSubject : Subject<Post[]>;

  constructor() { }

  emitPosts(){
    this.postsSubject.next(this.posts);
  }

  addNewPost(post : Post){
    this.posts.push(post);
    this.savePostToServer();
    this.emitPosts();
    console.log("Post ajouté !");
    
  }

  savePostToServer(){
    firebase.database().ref('/posts').set(this.posts);
  }

  getPostsFromServer(){
    firebase.database().ref('/posts')
    .on('value', (data: firebase.database.DataSnapshot) => {
      this.posts = data.val() ? data.val() : [];
      console.log("Posts récupérés");
      this.emitPosts();
    })
  }

  removePost(post: Post){
    const postIndexToRemove = this.posts.findIndex( (postEl) =>{
      if( postEl === post){
        return true;
      }
    } );
    this.posts.splice(postIndexToRemove, 1);
    this.savePostToServer();
    this.emitPosts;
  }
}
