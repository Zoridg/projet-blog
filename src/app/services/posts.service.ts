import { Injectable } from '@angular/core';
import {Post} from "../models/post.model";
import {Subject} from "rxjs";
import * as firebase from 'firebase/app';
import Datasnapshot = firebase.database.DataSnapshot;

@Injectable({
  providedIn: 'root'
})
export class PostsService{

  posts: Post[] = [];
  PostSubject = new Subject<Post[]>();

  constructor(){
    this.getPosts();
  }

  emitPosts(){
    this.PostSubject.next(this.posts);
  }

  savePosts(){
    firebase.database().ref('/posts').set(this.posts);
  }

  getPosts() {
    firebase.database().ref('/posts')
      .on('value', (data: Datasnapshot) => {
      this.posts = data.val() ? data.val() : [];
      this.emitPosts();
    });
  }

  createNewPost(newPost: Post){
    this.posts.push(newPost);
    this.savePosts();
    this.emitPosts();
  }

  removePost(post: Post){
    const indexOfPostToRemove = this.posts.findIndex(
      (postEl) => {
        if(postEl == post) {
          return true;
        }
      }
    );
    this.posts.slice(indexOfPostToRemove, 1);
    this.savePosts();
    this.emitPosts();
  }
}
