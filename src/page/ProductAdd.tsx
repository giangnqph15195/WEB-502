import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'

type ProductAddProps = {
    name:string,
    onAdd: (products: FormInput)=> void
}
type FormInput = {
    name: string,
    price: number
}
const ProductAdd = (props: ProductAddProps) => {
    const {register, handleSubmit, formState: {errors}} = useForm<FormInput>();
    const onSubmit : SubmitHandler<FormInput> = data => {
        props.onAdd(data)
        console.log(data)
    }
  return (
    <div><h1>ProductAdd</h1>
        <form action="" onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder='Nhap tieu de' {...register('name')} />
            <input type="text"  placeholder='gias' {...register('price')} />
            <button>Add</button>
        </form>
    </div>
  )
}

export default ProductAdd