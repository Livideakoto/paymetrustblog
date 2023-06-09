import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Comment } from '../models/comment.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class CommentService {
	authToken!: string | null;
	headers!: any;

	constructor(private http: HttpClient){
		this.authToken = window.localStorage.getItem('authToken');
		this.headers = new HttpHeaders({
			'Authorization': `Bearer ${this.authToken}`
		});
	}

	getPostComments(postId: number): Observable<Comment[]>{
		return this.http.get<Comment[]>(`http://localhost:4000/api/posts/${postId}/comments`, {headers: this.headers});
	}

	addComment(datas: any): Observable<Comment>{
		return this.http.post<Comment>(`http://localhost:4000/api/posts/${datas.post}/comments`, {
			content: datas.comment,
			user_id:datas.user
		}, {headers: this.headers});
	}
}
