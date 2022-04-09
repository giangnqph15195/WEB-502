import React, {useState, useEffect} from 'react'
import { Steps } from 'antd';
import { TypeCart } from '../type/cart';
import { TypeOrder } from '../type/order';
import {useParams,useNavigate} from 'react-router-dom'
import {useForm, SubmitHandler} from 'react-hook-form'
import { listdetailorder , listinfo, updateStatu} from '../api/order';
import NumberFormat from "react-number-format";
import styles from './OtherNumberFormat.module.scss'

const { Step } = Steps;
type Props = {}
type Form = {
  status:number
  startnew: number
}

const QLDOder = (props: Props) => {
  const [order, setorder] = useState<TypeCart[]>([])
    const [info, setinfo] = useState<TypeOrder>()
    const { register, handleSubmit, formState:{errors} } = useForm<Form>()
    const { id } = useParams()
    const navigate = useNavigate()
    console.log(id)
    useEffect(() => {
        const list = async () => {
            const { data } = await listdetailorder(id)
            setorder(data)
        }
        list()
    }, [])

    useEffect(()=>{
        const inffo = async () => {
            const {data} = await listinfo(id)
            setinfo(data)
        }
        inffo()
    },[])


     const updateStatus = (status: number) => {
        if(status == 0){
          return  <select id="" {...register('status')}>
              <option value="10">Hủy đơn hàng</option>
          </select>
        }else if(status == 1){
            return  <select  id="" {...register('status')}>
            <option value="10">Hủy đơn hàng</option>
        </select>
        }else if(status == 2){
            return <select  id="" {...register('status')}>
            <option value="4">Đã Nhận</option>
        </select>
        }else if(status == 3){
            return <select  id="" {...register('status')}>
            <option value="4">Đã Nhận</option>
        </select>
        }
        else if(status == 10){
          return <select  id="" {...register('status')}>
          <option value="0">Đặt lại</option>
      </select>
      }
    }
   const onSunmit : SubmitHandler<Form> = async data =>{
       const newstatus = {
           ...data,
           _id : id
       }
       console.log(newstatus)

      const updateSta = await updateStatu(newstatus)
      navigate(`/order/${JSON.parse(localStorage.getItem('user')as string).user._id}`)
       console.log(updateSta)
   }
  return (
    <div ><h3 className='text-center font-bold text-xl mt-10'>Details Order</h3>
       <div className="pt-24 max-w-5xl m-auto"> <Steps current={info?.status} percent={60} >
    <Step title="Chờ Xác Nhần" />
    <Step title="Đã Xác nhận" description="This is a description." />
    <Step title="Đang giao" description="This is a description." />
    <Step title="Đã giao" description="This is a description." />

    <Step title="Đã nhận hàng" description="This is a description." />
  </Steps></div>

  <div className='flex max-w-7xl m-auto py-10'>
                <table className="table table-striped table-hover w-9/12">
                    <thead className='table-dark'>
                        <tr className='text-center'>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Image</th>
                            <th scope="col">Price</th>
                            <th className='w-8' scope="col">Quantiny</th>
                            <th scope="col">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {order.map((item, index) => {
                            return <tr key={index} className='text-center'>
                                <td width={10} scope="col">{index + 1}</td>
                                <td width={290} scope="col">{item.name}</td>
                                <td width={80} scope="col"><img width={80} src={`${item.image}`} alt="" /></td>
                                <td scope="col">
                                    <NumberFormat
                                        thousandsGroupStyle='thousand'
                                        value={item.price}
                                        displayType= 'text'
                                        thousandSeparator= {true}
                                    /> VND
                                    {/* {size(item.size,item.price)} */}
                                    </td>
                                <td scope="col">{item.quantiny}</td>
                                <td scope="col"> <NumberFormat
                                        thousandsGroupStyle='thousand'
                                        value={item.price * item.quantiny}
                                        displayType= 'text'
                                        thousandSeparator= {true}
                                    /> VND</td>
                            </tr>
                        })}

                    </tbody>
                </table>
                <div className='w-1 h-52 bg-gray-700 mx-2'></div>
                <div>
                    <h1 className='text-center text-xl mb-8'>Thông tin đơn hàng</h1>
                    <label className='inffo' >Tên</label>: {info?.name} <br />
                    <label className='inffo'>Địa chỉ</label>:{info?.address} <br />
                    <label className='inffo'>Số điện thoại</label> :{info?.phone} <br />
                    {/* <label className='inffo'>Status</label>:{Status(info?.status)} <br /> */}
                   
                    <form action="" onSubmit={handleSubmit(onSunmit)}>
                    <label className='inffo'>Status</label>:{updateStatus(info?.status)} <br />
                    {/* <input type="text" value={info?.status+2} {...register('status')+2}/> */}
                    <button className='bg-blue-500 p-2 text-white font-bold'>Gửi</button>
                    </form>

                </div>
            </div>
    </div>
  )
}

export default QLDOder