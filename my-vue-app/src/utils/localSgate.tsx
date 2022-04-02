import { NavLink } from "react-router-dom";
import { TypeUser } from "../type/user";


export const authenticated = (user : TypeUser , next: () => void ) => {
    localStorage.setItem('user', JSON.stringify(user))
    next()
}
// const results = JSON.parse(localStorage.getItem('user') as string)
// export const id_tk = results.user.id
export const isAuthenticate = () =>{
    // if(typeof window === "undefined") return;
    // if(localStorage.getItem(key)){
    //     return JSON.parse(localStorage.getItem(key) as string)
    // } else {
    //     return false
    // }
    const result = JSON.parse(localStorage.getItem('user') as string);

    if(localStorage.getItem('user')){
        return<div className=""> 
        <NavLink className="text-sm text-gray-700" onClick={()=> localStorage.removeItem('user')} to="/">Đăng Xuất</NavLink>

        </div>
    }
    else{
        return (
            <div className="">
                <NavLink className="text-sm text-gray-700 "  to={'/signin'}>Đăng nhập</NavLink> <br />
                <NavLink className="text-sm text-gray-700 "  to={'/signin'}>Đăng ký</NavLink>
            </div>
        ) 
        
    }
   
}

export const usertk = () => {
    // if(typeof window === "undefined") return;
    if(localStorage.getItem('user')){
        return JSON.parse(localStorage.getItem('user') as string)
    } else {
        return false
    }
}


export const check = () => {
    const checker = JSON.parse(localStorage.getItem('user') as string)
    if(checker){
       if(checker.user.role == 0){
        return <div> <NavLink to={`/admin`} className="text-sm text-gray-700">Admin</NavLink></div>
       }
    }else{
        ""
    }
}
