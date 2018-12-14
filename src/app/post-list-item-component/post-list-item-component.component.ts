import {Component, Input, OnInit} from '@angular/core';
import {Post} from "../models/post.model";
import {PostsService} from "../services/posts.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.scss']
})
export class PostListItemComponentComponent implements OnInit {

  post: Post

  constructor() {

  }

  ngOnInit() {

  }

  onThumbUp(){
    this.post.loveIts++;
  }

  onThumbDown(){
    this.post.loveIts--;
  }
}
