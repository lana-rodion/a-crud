import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Post } from '../post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-index',
  imports: [CommonModule, RouterModule],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css',
})
export class IndexComponent implements OnInit {
  posts: Post[] = [];

  constructor(public postService: PostService) {}

  /**
   * @description Get all posts
   * @memberof IndexComponent
   * @returns {void}
   */
  ngOnInit(): void {
    this.postService.getAll().subscribe((data: Post[]) => {
      this.posts = data;
      console.log(this.posts);
    });
  }
  /**
   * @description Delete post
   * @param id
   * @memberof IndexComponent
   * @returns {void}
   */
  deletePost(id: number): void {
    this.postService.delete(id).subscribe(() => {
      this.posts = this.posts.filter((post) => post.id !== id);
      alert('Post deleted successfully');
    });
  }
}
