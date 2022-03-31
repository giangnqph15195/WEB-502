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

    const check = () => {
        if(result.user.role==0){
            <NavLink to={`/admin`}>Admin</NavLink>
        }
    }
    if(localStorage.getItem('user')){
        return<div className=""> 
        <NavLink className='headeracc text-white text-3xl bg-red-800 rounded-md px-2 py-2 hover:bg-black hover:text-orange-700' to={`/`}><button onClick={()=> localStorage.removeItem('user')}><i className="fa-solid fa-arrow-right-from-bracket text-red"></i></button></NavLink>
        {check()}
        </div>
    }
    else{
        return (
            <div className="">
                <NavLink className='headeracc text-white text-3xl bg-red-800 rounded-md px-2 py-2 hover:bg-black hover:text-orange-700' to={'/signin'}><i className="fas fa-user header__acc-icon text-white"></i></NavLink>
            </div>
        ) 
        
    }
   
}

// export const usertk = () => {
//     if(localStorage.getItem('user')){
        
//     }
// }