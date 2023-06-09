import { Component, Input } from '@angular/core';
import { Post } from '../models/post.model';

@Component({
  selector: 'app-post-hero',
  templateUrl: './post-hero.component.html',
  styleUrls: ['./post-hero.component.css']
})
export class PostHeroComponent {
	@Input() post!: Post;
	@Input() random!: number;
}
