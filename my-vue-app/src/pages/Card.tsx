import React, { useEffect, useState } from 'react'
// import { Table, Tag, Space } from 'antd';
import {useParams} from 'react-router-dom'
import { listcart, read } from '../api/cart'
import { TypeCart } from '../type/cart'
import NumberFormat from "react-number-format";
import styles from './OtherNumberFormat.module.scss'
import {deleteCart} from '../api/cart'
import {useForm, SubmitHandler} from 'react-hook-form'
import { TypeOrder } from '../type/order';
import { addorder, updatecard } from '../api/order';
import Item from 'antd/lib/list/Item';

type Props = {
  // onRemoveCR: (_id : number) => void
  // id: (id:number ) => void
}
type Form = {
  name: string
  address:string
  phone: number
  note: string
  // status:number
}



const Card = (props: Props) => {
  const [carts, setcart] = useState<TypeCart[]>([])
  // const [cart, setcarts] = useState<TypeCart[]>([])

  const [total, settotal] = useState<Number>()
  const {id} = useParams()
  const {register, handleSubmit, formState: {errors}} = useForm<TypeOrder>()
  // props.id(id)

  useEffect(()=>{
    const getCart = async () => {
      const {data} = await read(id)
      setcart(data)
      const totals = data.quantiny * data.price
      console.log(totals)
      settotal(totals)
      // setcart(cart.filter(item => item._id != id))
    }
    getCart()
  },[])
  // useEffect(()=>{
  //   const getCarts = async () => {
  //     const {data} = await listcart()
  //     setcarts(data)
  //     // setcart(cart.filter(item => item._id != id))
  //   }
  //   getCarts()
  // },[])
  const onRemoveCR = async (_id: number) => {
    const confirm = window.confirm("Bạn có muốn xóa sản phẩm này khỏi giỏ hàng")
    if (confirm) {
      deleteCart(_id)
      setcart(carts.filter(item => item._id !== _id))
    }
  }
  
 

  const onSubmit : SubmitHandler<Form> =async data => {
    const {data : addOrder} = await addorder(data)
    console.log('moi nhat nhat',addOrder._id)
    const newobject = {
       order: addOrder._id,
      user : id
    }
    const {data : updateCart} = await updatecard(newobject)
    console.log(updateCart)
    console.log(newobject)

    console.log(data)
    
  }
  console.log('quan trong',id)
  const size = (cate: number, price: number) => {
    if(cate == 1){
       return "Size S : 90.000 VND"
    }else if(cate == 2 ){
     return "Size M : 120.000 VND"
    }else if(cate == 3){
     return "Size L : 150.000 VND"
    }else{
      return <NumberFormat thousandsGroupStyle='thousand' value={price} displayType='text' thousandSeparator={true} />
 
 }}



  return (
    <div className='my-24'>
      <div className='flex max-w-6xl m-auto mt-56'>
      <div className='table-cart'>
      <table className="table table-hover mr-72">
          <thead className=''>
            <tr className=''>
              <th scope="c" className='text-red-700 text-xl text-center w-10'>Image</th>
              <th scope="col" className='text-red-700 text-xl text-center'>Name</th>
              <th scope="col" className='text-red-700 text-xl text-center'>Price</th>
              <th scope="col" className='text-red-700 w-2 text-xl text-center'>Quantiny</th>
              <th scope="col" className='text-red-700 text-xl text-center'>Total</th>
              <th scope="col" className='text-red-700  w-8'></th>
            </tr>
          </thead>
          <tbody className=''>
            {carts.map((item)=> {
              return <tr>
              <th scope="row"><img src={`${item.image}`} alt="" /></th>
              <td className='text-center py-4'>{item.name}</td>
              <td className='text-center py-4'>
              {/* {()=>{
                if(item.size == 0){
                  return ""
                }
                else{
                  item.price
                }
              }} */}
                {/* <NumberFormat 
                  thousandsGroupStyle='thousand'
                  value=
                  displayType="text"
                  thousandSeparator={true}
                /> */}
                {size(item.size,item.price)}
                </td>
              <td className='text-center py-4'>{item.quantiny}</td>
              <td className='text-center py-4'>
                <NumberFormat
                  thousandsGroupStyle='thousand'
                  value={item.quantiny * item.price}
                  displayType="text"
                  thousandSeparator={true}
                />
                </td>
              <td className='text-center'><button onClick={()=> {onRemoveCR(item._id)}}><i className="fa-solid fa-trash-can"></i></button></td>
            </tr>
            })}
            
            </tbody>
        </table>
        <div>
          {
            total
          }
        </div>
      </div>

      <br />
        <div className='w-0.5 ml-4 bg-gray-700'>

        </div> 

      
        <div>
        <h3 className='text-center text-xl text-gray-600 mb-10'>Thông tin thanh toán</h3>
        <form action="" className='ml-10' onSubmit={handleSubmit(onSubmit)}>
       
          <div className="mb-3">
            <label  className="form-label">Họ và tên</label>
            <input type="text" className="form-control w-96" {...register('name')} />
          </div>
          <div className="mb-3">
            <label  className="form-label">Số điện thoại</label>
            <input type="text" className="form-control w-96" {...register('phone')}  />
          </div>
          <div className="mb-3">
            <label  className="form-label">Địa chỉ</label>
            <input type="text" className="form-control w-96" {...register('address')}  />
          </div>
          <div className="mb-3">
            <label  className="form-label">Ghi chú</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" {...register('note')} ></textarea>
          </div>
          <button className='bg-orange-500 py-2 text-white font-bold px-8'>Đặt Hàng</button>
        </form> 
        </div>





       


      </div>
    </div>
  )
}

export default Card