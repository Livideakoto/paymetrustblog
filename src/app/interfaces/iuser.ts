export interface IUser{
	id: number,
	email: string,
	pseudo: string,
	emailhash?: string,
	created_at?: string | Date,
	updated_at?: string | Date | null
}
