import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { Post } from '../models/post.model';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.scss']
})
export class PostListItemComponentComponent implements OnInit {

  @Input() item : Post;

  constructor(private postService: PostService) { }

  ngOnInit(): void {
  }

  onLike(){
    this.item.loveIts++;
    this.postService.updatePost(this.item); 
  }

  onDislike(){
    this.item.loveIts--;
    this.postService.updatePost(this.item);
  }

  deleteItem(){
    this.postService.removePost(this.item);
  }
}
