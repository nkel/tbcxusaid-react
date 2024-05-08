export default interface IRecipes {
    id: number,
    name: string,
    ingredients?: string[]
    image: string,
    instructions: string
}
export default interface IArticle {
    id: number,
    title: string,
    body: string
}

export default interface IProduct {
    id: number,
    price: number,
    thumbnail: string,
    title: string,
    description: string,
    stock: number
}