import {Component, OnDestroy, OnInit} from '@angular/core';
import {Post} from "../models/post.model";
import {Subscription} from "rxjs";
import {PostsService} from "../services/posts.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.scss']
})
export class PostListComponentComponent implements OnInit, OnDestroy {

  posts: Post[];
  postsSubscription: Subscription;

  constructor(private postsService: PostsService, private router: Router) {
  }

  ngOnInit() {
    this.postsSubscription = this.postsService.PostSubject.subscribe(
      (posts: Post[]) => {
        this.posts = posts;
      }
    );
    this.postsService.emitPosts();
  }

  onNewPost(){
    this.router.navigate(['/posts', 'new'])
  }

  onDeletePost(post: Post){
    this.postsService.removePost(post);
  }

  ngOnDestroy(){
    this.postsSubscription.unsubscribe();
  }

}
