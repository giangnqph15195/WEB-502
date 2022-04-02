import { TypeUser } from "../type/user";
import instance from "./instance";

export const signup = (user : TypeUser ) =>{
    const url = `/signup`;
    return instance.post(url, user)
}
export const adduser = (userr : TypeUser ) =>{
    const url = `/user`;
    return instance.post(url, userr)
}
export const edituser = (user : TypeUser ) =>{
    const url = `/user/${user._id}/edit`;
    return instance.put(url, user)
}

export const signin = (user : TypeUser ) =>{
    const url = `/signin`;
    return instance.post(url, user)
}
export const listuser = () =>{
    const url = '/users'
    return instance.get(url)
}
export const removeuser = (_id:number) => {
    const url = `user/${_id}/delete`
    return instance.delete(url)
}
export const findone = (_id:string|undefined) => {
    const url = `/user/${_id}`
    return instance.get(url)
}