import { IUser } from "../interfaces/iuser";

export class Comment{
	id!: number;
	content!: string;
	user_id!: number;
	post_id!: number;
	created_at!: string | Date;
	updated_at!: string | Date | null;
	user!: IUser;
}
