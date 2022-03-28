import React, { useState,useEffect } from 'react'
import {useParams} from 'react-router-dom'
import { getone } from '../api/products'
import { TypeProduct } from '../type/products'
type Props = {}

const DetailProduct = (props: Props) => {
    const [count, setcount] = useState(1)
    const { id } = useParams()
    const [products, setproducts] = useState<TypeProduct>()
    console.log(id)
    useEffect(()=>{
        const getOne = async () => {
          const {data} = await getone(id)
          setproducts(data)
        }
        getOne()
      },[id])
  return (
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
                <button onClick={()=>setcount(count - 1)} className='bg-orange-500 w-10 text-3xl text-center text-white'>-</button>
                <input className='border-2 border-slate-400 w-10 text-center mx-1' value={`${count}`}/>
                <button onClick={()=>setcount(count + 1)} className='bg-orange-500 w-10 pb-2 text-3xl text-center text-white'>+</button>
            </div>
            <button className='bg-orange-500 px-4 py-2 text-white text-lg mt-20'>Thêm vào giỏ hàng</button>
        </div>
    </div>
  )
}

export default DetailProduct