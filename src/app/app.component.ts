import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ILoginError, ILoginSuccess } from './interfaces/ilogin-user';
import { HttpClient } from '@angular/common/http';
import { Category } from './models/category.model';
import { CategoryService } from './services/category.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	title = 'Mon Blog';
	loading: boolean = false;
	auth$!: Observable<ILoginSuccess | ILoginError>;
	categories!: Category[];
	category$!: Observable<Category[]>;

	constructor(
		private http: HttpClient,
		private categoryService: CategoryService
	){}

	ngOnInit(): void {
		let authToken = window.localStorage.getItem('authToken');

		if(!authToken){
			this.auth$ = this.http.post<ILoginSuccess | ILoginError>('http://localhost:4000/auth/login', {
				email: 'livideakoto@gmail.com',
				password: 'the nerd'
			});
			this.auth$.subscribe((value) => {
				if(value.code == 200 && value.object){
					window.localStorage.setItem('authUser', JSON.stringify({
						id: value.object.id,
						email: value.object.email,
						pseudo: value.object.pseudo,
						emailhash: value.object.emailhash,
					}));
					window.localStorage.setItem('authToken', value.object.token);
				}
			});
		}

		let category$ = this.categoryService.getCategories();
		category$.subscribe(categories => {
			this.categories = categories;
		});
}

	setLoading(value: boolean){
		console.log('Changing value', value);
		this.loading = value;
	}
}
