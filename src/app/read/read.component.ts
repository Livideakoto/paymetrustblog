import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { Post } from '../models/post.model';
import { Comment } from '../models/comment.model';
import { ActivatedRoute } from '@angular/router';
import { CommentService } from '../services/comment.service';
import { NgForm } from '@angular/forms';
import { IUser } from '../interfaces/iuser';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {
	post!: Post;
	comments!: Comment[];
	loading: boolean = false;
	comment!: string;
	user!: IUser;

	constructor(
		private postService: PostService,
		private commentService: CommentService,
		private route: ActivatedRoute
	){}

	ngOnInit(): void {
		this.loading = true;
		const id = this.route.snapshot.params['id'];
		let observable$ = this.postService.getPostById(id);
		let cobservable$ = this.commentService.getPostComments(id);

		this.user = JSON.parse(window.localStorage.getItem('authUser') || '');

		observable$.subscribe(post => {
			post.created_at = new Date(post.created_at);
			this.post = post;
		});

		cobservable$.subscribe(comments => {
			console.log(comments)
			this.comments = comments;
			this.loading = false;
		});
	}

	onSubmitComment(form: NgForm){
		console.log(form.value);

		if(form.value.comment){
			let observable$ = this.commentService.addComment(form.value);
			observable$.subscribe(comment => {
				this.comments.unshift(comment);
				this.comment = '';
			});
		}
	}
}
