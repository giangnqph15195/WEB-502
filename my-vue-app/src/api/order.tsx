import { TypeOrder } from "../type/order";
import {TypeCart} from '../type/cart'
import instance from "./instance";

export const addorder = (data: TypeOrder) =>{
    const url = `order`
    return instance.post(url, data)
}
export const updatecard = (newobject : TypeCart) =>{
    const url = `cards/update/${newobject.user}`
    return instance.put(url, newobject)
}