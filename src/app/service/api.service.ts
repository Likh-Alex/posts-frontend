import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Post} from "../post";
import {Comment} from "../comment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private BASE_URL = 'http://localhost:8080/';
  private POSTS_URL = `${this.BASE_URL}\\posts`;
  private COMMENTS_URL = `${this.BASE_URL}\\comments`;

  constructor(private http: HttpClient) {
  }

  getAllPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.POSTS_URL);
  }

  getAllComments(): Observable<Comment[]> {
    return this.http.get<Comment[]>(this.COMMENTS_URL);
  }
}
