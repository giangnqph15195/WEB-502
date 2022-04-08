import { TypeCart } from "../type/cart"
import instance from "./instance"

export const read = (id:string | undefined) => {
    const url = `/cards/${id}`
    return instance.get(url)
}
export const listcart = () => {
    const url = `/card`
    return instance.get(url)
}
export const addCard = (productCR:TypeCart) => {
    const url = `/cards`
    return instance.post(url, productCR)
}
export const deleteCart = (id:number) =>{
    const url = `/card/${id}`
    return instance.delete(url)
}