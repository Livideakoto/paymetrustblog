import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../models/category.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
	authToken!: string | null;
	headers!: any;

	constructor(private http: HttpClient){
		this.authToken = window.localStorage.getItem('authToken');
		this.headers = new HttpHeaders({
			'Authorization': `Bearer ${this.authToken}`
		});
	}

	getCategories(): Observable<Category[]>{
		return this.http.get<Category[]>(`http://localhost:4000/api/categories`, {headers: this.headers});
	}

	getCategory(id: number): Observable<Category>{
		return this.http.get<Category>(`http://localhost:4000/api/categories/${id}`, {headers: this.headers});
	}
}
