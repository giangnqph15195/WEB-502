import axios from 'axios'
import React, { useEffect } from 'react'
import {SubmitHandler, useForm} from 'react-hook-form'
import {useNavigate, useParams} from 'react-router-dom'
import { Iproduct } from '../type/product'
type UpdateProps = {
    onUpdate : (product : Iproduct) => void
}
type FormInput = {
    name: string,
    price: number
}
const ProductEdit = (props: UpdateProps) => {
    const {register, handleSubmit, formState:{errors},reset} = useForm<FormInput>()

    const navigate = useNavigate()
    const{id} = useParams()
    useEffect( ()=> {
        const getPD = async () => {
            const { data } = await axios.get(`http://localhost:3001/products/`+id)
            reset(data)
        } 
        getPD()
    },[])

    const onSubmit : SubmitHandler<FormInput> = data => {
        props.onUpdate(data)
        navigate("/admin/products")
    }
  return (
    <div>ProductEdit
        <form action="" onSubmit={handleSubmit(onSubmit)}>
            <input type="text"  {...register('name')}/>
            <input type="number" {...register('price')}/>
            <button>Edit</button>
        </form>
    </div>
  )
}

export default ProductEdit