import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Form, Input, Button, Checkbox } from 'antd';
import { useForm, SubmitHandler } from 'react-hook-form'
import { TypeProduct } from '../../type/products';
import { TypeCategories } from '../../type/categories';
import { getall } from '../../api/categories';
import axios from 'axios'
import {  message } from 'antd';

const key = 'updatable'


type PropsAdd = {
  onAdd: (product: Form) => void
}
type Form = {
  name: string,
  image: string
  price: number,
  description: string,
  category: string
}
const AddProduct = (props: PropsAdd) => {
  const [category, setcategory] = useState<TypeCategories[]>([])
  const { register, handleSubmit, formState: { errors } } = useForm<Form>()
  useEffect(() => {
    const getallCT = async () => {
      const { data } = await getall()
      setcategory(data)
    }
    getallCT()
  }, [])
  const navigate = useNavigate()
  const onSubmit: SubmitHandler<Form> = data => {
    console.log(data.image[0])
    const file = data.image[0]
    const formData = new FormData()

    formData.append('file', file)
    formData.append("upload_preset", "mi59v8ju")

    axios({
      url: "https://api.cloudinary.com/v1_1/dkrifqhuk/image/upload",
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-formendcoded",
      }, data: formData,
    }).then((res) => {
      data.image = res.data.url
      console.log(data.image)
      props.onAdd(data)
      navigate('/admin')
    })

    console.log(data)
  }

  const openMessage = () => {
    message.loading({ content: 'Loading...', key });
    setTimeout(() => {
      message.success({ content: 'Loaded!', key, duration: 2 });
    }, 2000);
  };
  return (
    <div>
      <h3 className='text-center text-3xl font-bold'>Add Product</h3>
      <form className='m-auto max-w-4xl' onSubmit={handleSubmit(onSubmit)}>
        <select id="" {...register('category')}>
          {category.map((item) => {
            return <option value={`${item._id}`}>
              {item.name}
            </option>
          })}
        </select>
        <div className="mb-3">
          <label className="form-label">Name Product:</label>
          <input type="text" className='form-control' {...register('name')} />
        </div>

        <div className="mb-3">
          <label className="form-label">Image Product:</label>
          <input type="file" className='form-control' {...register('image')} />
        </div>
        <div className="mb-3">
          <label className="form-label">Price:</label>
          <input type="number" className='form-control' {...register('price')} />
        </div>
        <div className="mb-3">
          <label className="form-label">Details:</label>
          <input type="text" className='form-control' {...register('description')} />
        </div>
        <button  className="btn btn-primary" onClick={openMessage}>Submit</button>
      </form>
    </div>
  )
}

export default AddProduct