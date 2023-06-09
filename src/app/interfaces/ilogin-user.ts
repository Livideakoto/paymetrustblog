export interface ITokenObject {
	token: string,
	id: number,
	email: string,
	pseudo: string,
	emailhash?: string
}

export interface ILoginSuccess {
	code: number,
	object: ITokenObject
}

export interface ILoginError {
	code: number,
	message: string
	object?: ITokenObject
}


