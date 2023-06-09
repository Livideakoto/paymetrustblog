import { Category } from "./category.model";

export class Post{
	id!: number;
	slug!: string;
	title!: string;
	poster!: string | null;
	published!: number;
	user_id!: number;
	content!: string;
	description!: string;
	created_at!: string | Date;
	updated_at!: string | Date | null;
	categories!: Category[];
}
