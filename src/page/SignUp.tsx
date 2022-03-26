import axios from 'axios'
import React, {useState,useEffect} from 'react'
import {useForm, SubmitHandler} from 'react-hook-form'
import { Iproduct } from '../type/product'
type SignUpProps = {
   
}
type TypeForm = {
    name: string,
    email:string,
    password: string
}
const SignUp =  (props: SignUpProps) => {
    // const [users, setuser] = useState<Iproduct[]>([])
    // useEffect (()=>{
    //     const get = async () => {
    //       const { data } = await axios.get("http://localhost:3001/products")
    //       setuser(data)
    //     }
    //     getProduct()
    //   },[])
    const {register, handleSubmit, formState:{errors}} = useForm<TypeForm>()
    const onSignUp : SubmitHandler<TypeForm> = data => {
        const usernew = {
            relo: 0,
            ...data
        }
        const getUser = async ()=> {
            // const {data : check} = await axios.get(`http://localhost:3001/Users?q=${data.email}`)
            // if(check.length==0){
                await axios.post("http://localhost:3001/Users", usernew)
            // }else{   
            //     console.log('tạo thàng khác')
            // }
        }
        getUser()
        console.log()
    }
  return (
    <div>SignUp
        <form action="" onSubmit={handleSubmit(onSignUp)}>
            <input type="text" placeholder='name' {...register('name')}/>
            <input type="text"  placeholder='email' {...register("email")} />
            <input type="passwork" placeholder='pass' {...register('password')} />
            <button>Them</button>
        </form>
    </div>
  )
}

export default SignUp