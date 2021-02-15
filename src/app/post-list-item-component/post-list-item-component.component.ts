import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../models/post.model';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.scss']
})
export class PostListItemComponentComponent implements OnInit {

  @Input() item : Post
  constructor() { }

  ngOnInit(): void {
  }

  onLike(){
    this.item.loveIts++;
  }

  onDislike(){
    this.item.loveIts--;
  }

}
