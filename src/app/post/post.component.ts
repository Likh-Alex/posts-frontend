import {Component, OnInit} from '@angular/core';
import {Post} from "../post";
import {Comment} from "../comment";
import {PageEvent} from "@angular/material/paginator";
import {ApiService} from "../service/api.service";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  title = "Post component";
  posts: Post[] = [];
  postsSlice: Post[] = [];
  comments: Comment[] = [];
  commentsById: Comment[] = [];


  constructor(private apiService: ApiService) {
  }

  ngOnInit(): void {
    this.getAllPosts();
    this.getAllComments();
  }

  public getAllPosts() {
    this.apiService.getAllPosts().subscribe(res => {
        this.posts = res;
        this.postsSlice = this.posts.slice(0, 20);
      },
      error => {
        console.log("Can not fetch `posts` data");
      })
  }

  public getAllComments() {
    this.apiService.getAllComments().subscribe(
      res => {
        this.comments = res;
      },
      error => {
        alert("Can not fetch `comments` data");
      }
    )
  }

  public getCommentsByPostId(id: number): Comment[] {
    this.commentsById = [];
    let i;
    for (i = 0; i < this.comments.length; i++) {
      if (this.comments[i].postId == id) {
        this.commentsById.push(this.comments[i]);
      }
    }
    return this.commentsById;
  }

  OnPageChange(event: PageEvent) {
    const startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;
    if (endIndex > this.posts.length) {
      endIndex = this.posts.length;
    }
    this.postsSlice = this.posts.slice(startIndex, endIndex);
  }
}
