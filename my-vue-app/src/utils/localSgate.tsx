import { User } from "../type/user";


export const authenticated = (user : User , next: () => void ) => {
    localStorage.setItem('user', JSON.stringify(user))
    next()
}

export const isAuthenticate = () =>{
    return JSON.parse(localStorage.getItem('user') as string)
}