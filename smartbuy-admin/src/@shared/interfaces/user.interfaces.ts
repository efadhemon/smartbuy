export interface IUser {
	_id: string
	name: string
	phone: string
	email: string
	gender: string
	address: string
	image: string
}
export interface IUpdateUser {
	id?: string
	name?: string
	email?: string
	phone?: string
	gender?: string
	address?: string
}

export interface ICreateUser {
	name: string
	phone: string
	email: string
	password: string
	gender: string
	address: string
}
