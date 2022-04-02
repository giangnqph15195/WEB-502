import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useForm, SubmitHandler } from 'react-hook-form'
import { getone } from '../api/products'
import { TypeProduct } from '../type/products'
import { isAuthenticate, usertk } from '../utils/localSgate';
import { TypeUser } from '../type/user'
import { findone } from '../api/User'
import { Carousel } from 'antd';

// const { Meta } = Card;

type Props = {}
type TypeForm = {
  sl: number
}
const DetailProduct = (props: Props) => {
  const { id } = useParams()
  const { register, handleSubmit, formState: { errors } } = useForm<TypeForm>()
  const [user, setuser] = useState<TypeUser>();
  const [count, setcount] = useState(1)
  const [products, setproducts] = useState<TypeProduct>()

  useEffect(() => {
    const getOne = async () => {
      const { data } = await findone(JSON.parse(localStorage.getItem('user') as string).user._id)
      setuser(data)
    }
    getOne()
  }, []);

  useEffect(() => {
    const getOne = async () => {
      const { data } = await getone(id)
      setproducts(data)
    }
    getOne();
  }, [id])

  const onSubmit: SubmitHandler<TypeForm> = data => {
    const newObject = {
      ...data,
      id_tk: user._id,
      id_sp: id,
    };
    console.log(newObject)
  }

  return (
    
    <div>
      <div className='flex my-16 ml-36'>
      
      <div>
        <img width={600} src="https://res.cloudinary.com/dkrifqhuk/image/upload/v1645928802/asm/cwsepyemmxoba5llzp4s.jpg" alt="" />
      </div>
      <div className='ml-20'>
        <h2 className='text-3xl'>{products?.name}</h2>
        <p>{products?.description}</p>
        <h3 className='text-gray-500 text-xl mt-10'>Giá Sản phẩm </h3>
        <h3 className='text-orange-500 text-xl font-bold'>{products?.price}</h3>
        <div className='flex my-4'>

          <form action="" onSubmit={handleSubmit(onSubmit)}>
            <span onClick={() => setcount(count - 1)} className='bg-orange-500 p-2'><i className="fa-solid fa-minus text-lg text-white"></i></span>
            <input className='border-2 border-slate-400 w-10 text-center mx-1' min="1" value={`${count}`} {...register('sl')} />
            <span onClick={() => setcount(count + 1)} className='bg-orange-500 p-2'><i className="fa-solid fa-plus text-lg text-white"></i></span>
            <div>
            <button className='bg-orange-500 px-4 py-2 text-white text-lg mt-20'>Thêm vào giỏ hàng</button>
            </div>
          </form>
        </div>

      </div>
    </div>
    </div>
  )
}

export default DetailProduct