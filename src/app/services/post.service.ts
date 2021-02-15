import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import {Post} from '../models/post.model';
import firebase from 'firebase';

@Injectable()
export class PostService {
 
  private posts : Post[] ;
  postsSubject : Subject<Post[]> = new Subject<Post[]>();

  constructor() { 
    this.getPostsFromServer();
  }

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
    console.log("Enregistrement terminé !");
    
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

  updatePost(post: Post){
    this.posts = this.posts.map<Post>( (postEl) => {
      if( postEl === post){
        return post;
      }
      else{
        return postEl;
      }
    });
    this.savePostToServer();
    this.emitPosts();
  }
}
