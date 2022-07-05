import { TypeProduct } from "../type/products";
import instance from "./instance";
const addressUser = () => {
    if(localStorage.getItem('user')){
      return JSON.parse(localStorage.getItem('user')as string).user._id
    }
  }
export const list =()=> {
    const url= "/products"
    return instance.get(url)
}
export const create = (product: TypeProduct) => {
    const url = `/products`;
    return instance.post(url, product)
}
export const remove = (_id: number) => {
    const url = `/products/${_id}`
    return instance.delete(url)
}
export const getone = (_id: string | undefined) => {
    const url = `/products/${_id}`
    return instance.get(url)
}

export const update = (product: TypeProduct) => {
    const url = `/products/${product._id}`
    return instance.put(url, product)
}