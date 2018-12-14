import {Component, OnInit, OnDestroy} from '@angular/core';
import {Subscription} from "rxjs";
import {PostsService} from "../services/posts.service";
import {Post} from "../models/post.model";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  postSubscription: Subscription;
  posts: Post[];

  constructor(public postsService: PostsService) {
  }

  ngOnInit() {
    this.postSubscription = this.postsService.PostSubject.subscribe(
      (posts: Post[]) => {
        this.posts = posts;
      }
    )
  }

  ngOnDestroy() {
    this.postSubscription.unsubscribe();
  }
}
