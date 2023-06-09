import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { Category } from '../models/category.model';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from '../services/category.service';
import { Post } from '../models/post.model';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

	category!: Category;
	posts!: Post[];
	loading: boolean = false;

	constructor(
		private postService: PostService,
		private categoryService: CategoryService,
		private route: ActivatedRoute,
	){}

	ngOnInit(): void {
		const id = this.route.snapshot.params['id'];
		console.log('Category : ', id);

		this.loading = true;

		let cobservable$ = this.categoryService.getCategory(id);
		cobservable$.subscribe(category => this.category = category);

		let pobservable$ = this.postService.getPostsByCategory(id);
		pobservable$.subscribe(posts => {
			this.posts = posts;
			this.loading = false;
		});

	}
}
