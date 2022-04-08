import { TypeOrder } from "../type/order";
import {TypeCart} from '../type/cart'
import instance from "./instance";

export const listorder = () =>{
    const url = 'orders'
    return instance.get(url)
}
export const addorder = (data: TypeOrder) =>{
    const url = `order`
    return instance.post(url, data)
}
export const updatecard = (newobject : TypeCart) =>{
    const url = `cards/update/${newobject.user}`
    return instance.put(url, newobject)
}

export const listdetailorder = (_id: String) => {
    const url = `orders/${_id}`
    return instance.get(url)
}
export const listinfo = (_id: String) => {
    const url = `orderss/${_id}`
    return instance.get(url)
}