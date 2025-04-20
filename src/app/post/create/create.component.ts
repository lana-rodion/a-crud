import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { PostService } from '../post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css',
})
export class CreateComponent implements OnInit {
  form!: FormGroup;

  constructor(public postService: PostService, private router: Router) {}

  /**
   * @description Initialize the form
   * @memberof CreateComponent
   * @returns {void}
   */
  ngOnInit(): void {
    // Initialize the form with Validators
    // FormGroup is used to group the form controls
    this.form = new FormGroup({
      title: new FormControl('', [Validators.required]),
      body: new FormControl('', Validators.required),
    });
  }

  /**
   * @description Get the form
   * @memberof CreateComponent
   * @returns response
   */
  get f() {
    return this.form.controls;
  }

  submit() {
    console.log('this.form.value: ', this.form.value);
    // Check if the form is valid
    if (this.form.valid) {
      // Call the create method from the PostService
      this.postService.create(this.form.value).subscribe((response) => {
        console.log('response in submit', response);
        alert('Post created successfully');
        // Navigate to the index page after creating the post
        this.router.navigate(['/post/index']);
      });
    } else {
      alert('Please fill in all fields');
    }
  }
}
