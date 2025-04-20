import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { Post } from '../post';
import { PostService } from '../post.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css',
})
export class EditComponent implements OnInit {
  id!: number;
  post!: Post;
  form!: FormGroup;

  constructor(
    public postService: PostService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  /**
   * @description Initialize the form of Post with postId
   * @memberof EditComponent
   * @returns response()
   */
  ngOnInit(): void {
    this.id = this.route.snapshot.params['postId'];
    this.postService.find(this.id).subscribe((data: Post) => {
      this.post = data;
    });

    this.form = new FormGroup({
      title: new FormControl('', [Validators.required]),
      body: new FormControl('', Validators.required),
    });
  }

  /**
   * @description Get the form
   * @memberof EditComponent
   * @returns response
   */
  get f() {
    return this.form.controls;
  }

  /**
   * @description Submit update of post
   * @memberof EditComponent
   */
  submit() {
    console.log('this.form.value: ', this.form.value);
    this.postService.update(this.id, this.form.value).subscribe(() => {
      console.log('Post updated successfully!');
      alert('Post updated successfully!');
      this.router.navigateByUrl('post/index');
    });
  }
}
