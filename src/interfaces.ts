export interface IRecipes {
    id: number,
    name: string,
    ingredients?: string[]
    image: string,
    instructions: string
}
export interface IArticle {
    id: number,
    title: string,
    body: string
}

export interface IProduct {
    id: number,
    price: number,
    thumbnail: string,
    title: string,
    description: string,
    stock: number
}

export interface IUser {
    id:number,
    name: string,
    email: string,
    password: string,
    confirmPassword?: string,
}
