import { TypeProduct } from "../type/products";
import instance from "./instance";

export const list =()=> {
    const url= "/products"
    return instance.get(url)
}
export const add = (product: TypeProduct) => {
    const url = "/products";
    return instance.post(url, product)
}
export const remove = (id: number) => {
    const url = `/products/${id}`
    return instance.delete(url)
}
export const getone = (id: string | undefined) => {
    const url = `/products/${id}`
    return instance.get(url)
}

export const update = (product: TypeProduct) => {
    const url = `/products/${product.id}`
    return instance.put(url, product)
}