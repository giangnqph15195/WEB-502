import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useForm, SubmitHandler } from 'react-hook-form'
import { getone } from '../api/products'
import { TypeProduct } from '../type/products'
import { isAuthenticate, usertk } from '../utils/localSgate';
import { TypeUser } from '../type/user'
import { findone } from '../api/User'
import { Carousel } from 'antd';
import { TypeSize } from '../type/size'
import axios from 'axios'
import toastr from 'toastr'
import 'toastr/build/toastr.min.css'
import { TypeCart } from '../type/cart'
import NumberFormat from "react-number-format";
import styles from './OtherNumberFormat.module.scss'
// import { size } from '../utils/size'

// const { Meta } = Card;

type Props = {
  onAddCart : (productCR: TypeForm) => void
}
type TypeForm = {
  quantiny: number
  // image: string
}
const DetailProduct = (props: Props) => {
  const { id } = useParams()
  const { register, handleSubmit, formState: { errors } } = useForm<TypeForm>()
  const [user, setuser] = useState<TypeUser>();
  const [count, setcount] = useState(1)
  const [products, setproducts] = useState<TypeProduct>()
  const [sizess, setsize] = useState<TypeSize[]>([])

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

  useEffect(()=>{
    const getSZ = async () => {
      const {data} = await axios.get("http://localhost:3001/api/size")
      setsize(data)
    }
    getSZ()
  },[])

  const onSubmit: SubmitHandler<TypeForm> = data => {
   try {
    const newObject = {
      ...data,
      name:products?.name,
      user: user._id,
      image: products?.image,
      // id_sp: id,
      price: products?.price,
      description: products?.description,
      // order:""
    };
    props.onAddCart(newObject)
    console.log(newObject)
    toastr.success("Thêm giỏ hàng thành công")
   } catch (error) {
     toastr.error("Bạn phải đăng nhập")
   }
  }

//   const size = (cate: String) => {
//     if(cate == "62348a61b370bb70f7be55bc"){
//         return <div>
//             <select name="" id="">
//               {sizess.map((item)=> {
//                 return <option value={`${item._id}`}>{item.name}: {item.gia}</option>
//               })}
//             </select>
//         </div>
//     }else{
//         return <div>
//             {products?.price}
//         </div>
//     }
// }

  return (
    
    <div>
      <div className='flex my-16 ml-36'>
      
      <div>
        <img width={600} src={`${products?.image}`} alt="" />
      </div>
      <div className='ml-20'>
        <h2 className='text-3xl'>{products?.name}</h2>
        <p>{products?.description}</p>
        <h3 className='text-gray-500 text-xl mt-10'>Giá Sản phẩm </h3>
        <h3 className='text-orange-500 text-xl font-bold'>
          <NumberFormat
            thousandsGroupStyle='thousand'
            value={products?.price}
            displayType="text"
            thousandSeparator={true}
          />
          </h3> 
        <div className='flex my-4'>

          <form action="" onSubmit={handleSubmit(onSubmit)}>
            {/* <input type="hidden" value={`${products?.image}`} {...register('image')} /> */}
            <span onClick={() => setcount(count - 1)} className='bg-orange-500 p-2'><i className="fa-solid fa-minus text-lg text-white"></i></span>
            <input className='border-2 border-slate-400 w-10 text-center mx-1' min="1" value={`${count}`} {...register('quantiny')} />
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