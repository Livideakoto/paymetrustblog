import { Injectable } from '@angular/core';
import { Post } from '../models/post.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {
	authToken!: string | null;
	headers!: any;

	constructor(private http: HttpClient){
		this.authToken = window.localStorage.getItem('authToken');
		this.headers = new HttpHeaders({
			'Authorization': `Bearer ${this.authToken}`
		});
	}

	getPostById(id: number): Observable<Post>{
		return this.http.get<Post>(`http://localhost:4000/api/posts/${id}`, {headers: this.headers});
	}

	getAllPosts(): Observable<Post[]> {
		return this.http.get<Post[]>('http://localhost:4000/api/posts', {headers: this.headers});
	}

	getPostsByCategory(categoryId: number){
		return this.http.get<Post[]>(`http://localhost:4000/api/categories/${categoryId}/posts`, {headers: this.headers});
	}
}
