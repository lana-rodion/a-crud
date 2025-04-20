import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Post } from './post';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  apiURL = 'https://jsonplaceholder.typicode.com';

  /**
   *  Http Header Options
   */
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private httpClient: HttpClient) {}
  /**
   * @description Get all posts
   * @returns {Observable<Post[]>}
   * @memberof PostService
   */
  getAll(): Observable<any> {
    return this.httpClient
      .get(this.apiURL + '/posts/')
      .pipe(catchError(this.errorHandler));
  }

  /**
   * @description Find post by id
   * @param {number} id
   * @returns {Observable<Post>}
   * @memberof PostService
   */
  find(id: number): Observable<any> {
    return this.httpClient
      .get(this.apiURL + '/posts/' + id)
      .pipe(catchError(this.errorHandler));
  }

  /**
   * @description Create post
   * @param post
   * @returns response
   * @memberof PostService
   */
  create(post: Post): Observable<any> {
    console.log('JSON.stringify(post): ', JSON.stringify(post));
    return this.httpClient
      .post(this.apiURL + '/posts/', JSON.stringify(post), this.httpOptions)
      .pipe(catchError(this.errorHandler));
  }

  /**
   * @description Update post
   * @param id
   * @param post
   * @returns response
   * @memberof PostService
   */
  update(id: number, post: Post): Observable<any> {
    console.log('JSON.stringify(post): ', JSON.stringify(post));
    return this.httpClient
      .put(this.apiURL + '/posts/' + id, JSON.stringify(post), this.httpOptions)
      .pipe(catchError(this.errorHandler));
  }

  /**
   * @description Delete post
   * @param id
   * @returns response
   * @memberof PostService
   */
  delete(id: number) {
    return this.httpClient
      .delete(this.apiURL + '/posts/' + id, this.httpOptions)
      .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: any): Observable<never> {
    console.error('An error occurred:', error);
    return throwError(() => new Error(error.message || 'Server Error'));
  }
}
