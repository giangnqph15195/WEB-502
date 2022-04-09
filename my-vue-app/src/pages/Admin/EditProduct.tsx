import React, { useEffect, useState } from 'react'
import {useForm,SubmitHandler} from 'react-hook-form'
import {useNavigate, useParams} from 'react-router-dom'
import { getall } from '../../api/categories'
import { getone } from '../../api/products'
import { TypeCategories } from '../../type/categories'
import { TypeProduct } from '../../type/products'
import axios from 'axios'
import { Button, message } from 'antd';

const key = 'updatable';
type PropsUpdate = {
  onUpdate: (product : Form)=>void
}
type Form = {
  name: string,
  image: string,
  price:number,
  description: string,
  category:string
}
const EditProduct = (props: PropsUpdate) => {
  const {register, handleSubmit ,formState:{errors}, reset} = useForm<Form>()
  const [category, setcategory] = useState<TypeCategories[]>([])
  const [product, setproduct] = useState<TypeProduct[]>([])

  const navigate = useNavigate();
  const {id} = useParams()
  useEffect(()=>{
    const getOne = async () => {
      const {data} = await getone(id)
      setproduct(data)
      reset(data)
    }
    getOne()
  },[])

  useEffect(()=>{
    const getallCT = async () => {
      const {data : cate} = await getall()
      setcategory(cate)
    }
    getallCT()
  },[])
  const openMessage = () => {
    message.loading({ content: 'Loading...', key });
    setTimeout(() => {
      message.success({ content: 'Edit Product !', key, duration: 2 });
    }, 2000);}
  let imageUpdate = ""
  const onSubmit : SubmitHandler<Form> = async data => {
   try {
    console.log(data.image[0])
    if(data.image[0] != 'h'){
      const file = data.image[0]
      const formData = new FormData()

      formData.append("file", file)
      formData.append("upload_preset", "mi59v8ju")

      const {data : newimage} = await axios({
        url: "https://api.cloudinary.com/v1_1/dkrifqhuk/image/upload",
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-formendcoded",
        }, data: formData,
      })
      imageUpdate = newimage.url
      data.image = imageUpdate
      console.log(data.image)
    }
    console.log(data)
    props.onUpdate(data)
    navigate('/admin')
    
   } catch (error) {
     
   }
  }
  return (
    <div> 
        <h3 className='text-center text-3xl font-bold'>Edit Product</h3>
        <form className='m-auto max-w-4xl' onSubmit={handleSubmit(onSubmit)}>
          <select id="" {...register('category')}>
            {category.map((item)=> {
              return <option value={`${item._id}`}>
                {item.name}
                {/* <img src={`${item.image}`} alt="" /> */}
              </option>
            })}
          </select>
    <div className="mb-3">
      <label  className="form-label">Name Product:</label>
      <input type="text" className='form-control' {...register('name')} />
    </div>
    <div className="mb-3">
      <label  className="form-label">Image View:</label>
      {/* <input type="file" className='form-control' {...register('image')} /> */}
      <img src={`${product.image}`} alt="" />
    </div>
    <div className="mb-3">
      <label  className="form-label">Image Product:</label>
      <input type="file" {...register('image')} />
    </div>
    <div className="mb-3">
      <label  className="form-label">Price:</label>
      <input type="number" className='form-control' {...register('price')} />
    </div>
    <div className="mb-3">
      <label  className="form-label">Details:</label>
      <input type="text" className='form-control' {...register('description')} />
    </div>
    <button type="submit" onClick={openMessage} className="btn btn-primary text-black hover:text-white">Submit</button>
  </form></div>
  )
}

export default EditProduct