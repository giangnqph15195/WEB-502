import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import { Form, Input, Button, Checkbox } from 'antd';
import {useForm, SubmitHandler} from 'react-hook-form'
import { TypeProduct } from '../../type/products';
import { TypeCategories } from '../../type/categories';
import { getall } from '../../api/categories';


type PropsAdd = {
  onAdd : (product : Form) => void
}
type Form = {
  name:string,
  price:number,
  description: string,
  category: string
}
const AddProduct = (props: PropsAdd) => {
  const [category, setcategory] = useState<TypeCategories[]>([])
  const { register, handleSubmit, formState: {errors}} = useForm<Form>()
  useEffect(()=> {
    const getallCT = async () => {
      const {data} = await getall()
      setcategory(data)
    }
    getallCT()
  },[])
  const navigate = useNavigate()
  const onSubmit : SubmitHandler<Form> = data => {
    props.onAdd(data)
    navigate('/admin')
    console.log(data)
  }
  return (
    <div>
      <h3 className='text-center text-3xl font-bold'>Add Product</h3>
      <form className='m-auto max-w-4xl' onSubmit={handleSubmit(onSubmit)}>
        <select id="" {...register('category')}>
            {category.map((item)=> {
              return <option value={`${item._id}`}>
                {item.name}
              </option>
            })}
        </select>
    <div className="mb-3">
    <label  className="form-label">Name Product:</label>
    <input type="text" className='form-control' {...register('name')} />
    </div>
  
  <div className="mb-3">
    <label  className="form-label">Price:</label>
    <input type="number" className='form-control' {...register('price')} />
  </div>
  <div className="mb-3">
    <label  className="form-label">Details:</label>
    <input type="text" className='form-control' {...register('description')} />
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
  )
}

export default AddProduct