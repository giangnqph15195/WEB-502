import { TypeCategories } from "../type/categories";
import instance from "./instance";

export const getall = () =>{
    const url = '/categorys'
    return instance.get(url)
}
export const get = (_id:string | undefined) =>{
    const url = `/categorys/${_id}`
    return instance.get(url)
}
export const read = (slug : string|undefined) => {
    const url = `/category/${slug}`
    return instance.get(url)
}

export const addct = (category: TypeCategories) => {
    const url = '/categorys'
    return instance.post(url, category)
}
export const updatect = (category: TypeCategories) => {
    const url = `/category/${category._id}/edit`
    return instance.put(url, category)
}
export const removect = (_id:number) => {
    const url = `/category/${_id}`
    return instance.delete(url)
}