export enum Permissions {
	UserModify = "UserModify",
	UserDelete = "UserDelete",
	UserCreate = "UserCreate",
	UserView = "UserView",
}

export type PermissionsTypes =
	| "UserModify"
	| "UserDelete"
	| "UserCreate"
	| "UserView"
	| "FORBIDDEN"
