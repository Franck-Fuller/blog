import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Post } from '../models/post.model';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.scss']
})
export class PostListComponentComponent implements OnInit,OnDestroy {

  @Input() postList : Post[];
  postSubscription: Subscription;

  constructor(private postService: PostService) { 

  }

  ngOnInit(): void {
    this.postSubscription = this.postService.postsSubject.subscribe(
      (posts) =>{
        this.postList = posts;
      }
    );
    this.postService.emitPosts();
  }

  ngOnDestroy(){
    this.postSubscription.unsubscribe();
  }
}
