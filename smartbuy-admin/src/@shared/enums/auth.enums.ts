export enum Permissions {
	UserView = "UserView",
	UserCreate = "UserCreate",
	UserModify = "UserModify",
	UserDelete = "UserDelete",

	CategoryView = "CategoryView",
	CategoryCreate = "CategoryCreate",
	CategoryModify = "CategoryModify",
	CategoryDelete = "CategoryDelete",
}

export type PermissionsTypes =
	| "UserModify"
	| "UserDelete"
	| "UserCreate"
	| "UserView"

	| "CategoryView"
	| "CategoryCreate"
	| "CategoryModify"
	| "CategoryDelete"

	| "FORBIDDEN"
