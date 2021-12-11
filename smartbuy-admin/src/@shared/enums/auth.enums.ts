export enum Permissions {
    UserView = "UserView",
    UserCreate = "UserCreate",
    UserModify = "UserModify",
    UserDelete = "UserDelete",

    AdminView = "AdminView",
    AdminCreate = "AdminCreate",
    AdminModify = "AdminModify",
    AdminDelete = "AdminDelete",

    CategoryView = "CategoryView",
    CategoryCreate = "CategoryCreate",
    CategoryModify = "CategoryModify",
    CategoryDelete = "CategoryDelete",

    ProductView = "ProductView",
    ProductCreate = "ProductCreate",
    ProductModify = "ProductModify",
    ProductDelete = "ProductDelete",
}

export type PermissionsTypes =
    | "UserModify"
    | "UserDelete"
    | "UserCreate"
    | "UserView"
    | "AdminModify"
    | "AdminDelete"
    | "AdminCreate"
    | "AdminView"
    | "CategoryView"
    | "CategoryCreate"
    | "CategoryModify"
    | "CategoryDelete"
	| "ProductView"
    | "ProductCreate"
    | "ProductModify"
    | "ProductDelete"
    | "FORBIDDEN";
