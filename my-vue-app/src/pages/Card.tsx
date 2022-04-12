import React, { useEffect, useState } from 'react'
// import { Table, Tag, Space } from 'antd';
import { useParams, useNavigate } from 'react-router-dom'
import { listcart, read } from '../api/cart'
import { TypeCart } from '../type/cart'
import NumberFormat from "react-number-format";
import styles from './OtherNumberFormat.module.scss'
import { deleteCart } from '../api/cart'
import { useForm, SubmitHandler } from 'react-hook-form'
import { TypeOrder } from '../type/order';
import { addorder, updatecard } from '../api/order';
import Item from 'antd/lib/list/Item';
import toastr from 'toastr'
import 'toastr/build/toastr.min.css'

type Props = {
  // onRemoveCR: (_id : number) => void
  // id: (id:number ) => void
}
type Form = {
  name: string
  address: string
  phone: number
  note: string
  user: string
  // status:number
}



const Card = (props: Props) => {
  const [carts, setcart] = useState<TypeCart[]>([])
  // const [cart, setcarts] = useState<TypeCart[]>([])

  const [total, settotal] = useState<Number>()
  const { id } = useParams()
  const navigate = useNavigate()
  const { register, handleSubmit, formState: { errors } } = useForm<TypeOrder>()
  // props.id(id)

  useEffect(() => {
    const getCart = async () => {
      const { data } = await read(id)
      setcart(data)

      // setcart(cart.filter(item => item._id != id))
    }
    getCart()
  }, [])
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



  const onSubmit: SubmitHandler<Form> = async data => {
    try {
      const newdata = {
        ...data,
        user: id
      }
      const { data: addOrder } = await addorder(newdata)
      console.log('moi nhat nhat', addOrder._id)
      const newobject = {
        order: addOrder._id,
        user: id
      }
      const { data: updateCart } = await updatecard(newobject)
      console.log(updateCart)
      console.log(newobject)
      toastr.success("Đặt hàng thành công")

      navigate(`/order/${JSON.parse(localStorage.getItem('user') as string).user._id}`)

      console.log(data)
    } catch (error) {
      toastr.error("Đặt hàng không thành công")
    }

  }
  console.log('quan trong', id)
  // let newtotals = [];
  // const tong = (quantiny: number, price: number) => {
  //   // const tatols = quantiny * price
    
  //   const initialValue = 0;
  //   const sumWithInitial = newtotals.reduce(
  //     (previousValue, currentValue) => previousValue + currentValue,
  //     initialValue
  //   );
  //   console.log(sumWithInitial)
  // }




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
              {carts.map((item) => {
                return <tr>
                  <th scope="row"><img src={`${item.image}`} alt="" /></th>
                  <td className='text-center py-4'>{item.name}</td>
                  <td className='text-center py-4'>

                    <NumberFormat
                      thousandsGroupStyle='thousand'
                      value={item.price}
                      displayType="text"
                      thousandSeparator={true}
                    /> VND

                  </td>
                  <td className='text-center py-4'>{item.quantiny}</td>
                  <td className='text-center py-4'>
                    <NumberFormat
                      thousandsGroupStyle='thousand'
                      value={item.quantiny * item.price}
                      displayType="text"
                      thousandSeparator={true}
                    /> VND
                  </td>
                  <td className='text-center'><button onClick={() => { onRemoveCR(item._id) }}><i className="fa-solid fa-trash-can"></i></button></td>
                  {
                    // newtotals.push(tong(item.price, item.quantiny))Wx
                    

                  }
                </tr>
              })}

            </tbody>
          </table>
          <div>

          </div>
        </div>

        <br />
        <div className='w-0.5 ml-4 bg-gray-700'>

        </div>


        <div>
          <h3 className='text-center text-xl text-gray-600 mb-10'>Thông tin thanh toán</h3>
          <form action="" className='ml-10' onSubmit={handleSubmit(onSubmit)}>

            <div className="mb-3">
              <label className="form-label">Họ và tên</label>
              <input type="text" className="form-control w-96" {...register('name', {required:true})} />
              {Object.keys(errors).length !== 0 &&(
               <ul>
                  {errors.name?.type == 'required' && (<li className='text-[red]'>Tên không được để trống</li>)}
               </ul>
              )}
            </div>
            <div className="mb-3">
              <label className="form-label">Số điện thoại</label>
              <input type="text" className="form-control w-96" {...register('phone', {required:true, pattern:/((09|03|07|08|05)+([0-9]{8})\b)/g})} />
              {Object.keys(errors).length !== 0 &&(
               <ul>
                  {errors.phone?.type == 'required' && (<li className='text-[red]'>Số điện thoại không được để trống</li>)}
                  {errors.phone?.type == 'pattern' && (<li className='text-[red]'>Số điện thoại không hợp lệ</li>)}
               </ul>
              )}
            </div>
            <div className="mb-3">
              <label className="form-label">Địa chỉ</label>
              <input type="text" className="form-control w-96" {...register('address', {required:true})} />
              {Object.keys(errors).length !== 0 &&(
               <ul>
                  {errors.address?.type == 'required' && (<li className='text-[red]'>Địa chỉ không được để trống</li>)}
               </ul>
              )}
            </div>
            <div className="mb-3">
              <label className="form-label">Ghi chú</label>
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