import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { Post } from '../models/post.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	constructor(private postService: PostService){}

	posts!: Post[];
	heroPost!: Post;

	ngOnInit(): void {
		let observable$ = this.postService.getAllPosts();
		observable$.subscribe(posts => {
			if(posts.length > 0 && posts.shift() != undefined){
				this.heroPost = posts[0];
				this.posts = posts;
				posts.shift();
			}
		});
	}
}
