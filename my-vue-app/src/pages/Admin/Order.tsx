import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { listorder } from '../../api/order'
import { TypeOrder } from '../../type/order'

type Props = {}

const Order = (props: Props) => {
    const [order, setorder] = useState<TypeOrder[]>([])
    useEffect(()=>{
        const getorder = async () =>{
            const {data} = await listorder()
            setorder(data)
        }
        getorder()
    },[])
    
    const Status = (status: number) => {
        if(status == 0){
          return  "Chờ xác nhận"
        }else if(status == 1){
            return "Đã xác nhận"
        }else if(status == 2){
            return "Đang giao"
        }else if(status == 3){
            return "Đã giao"
        }else if(status == 4){
            return "Đã nhận"
        }else{
            return "Hủy Đơn"
        }
    }
    return (
        <div>
            <h1 className='text-center font-bold text-lg'>Order</h1>
            <div className=''>
                <table className="table table-striped table-hover max-w-5xl m-auto">
                    <thead className='table-dark'>
                        <tr className='text-center'>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Address</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Note</th>
                            <th scope="col">Status</th>
                            <th scope="col">Detail</th>


                        </tr>
                    </thead>
                    <tbody>
                        {order.map((item, index)=>{
                           return <tr key={index} className="text-center">
                            <td width={10} scope="col">{index + 1}</td>
                            <td scope="col">{item.name}</td>
                            <td scope="col">{item.address}</td>
                            <td scope="col">{item.phone}</td>
                            <td scope="col">{item.note}</td>
                            <td scope="col">{Status(item.status)}</td>
                            <td width={8} scope="col"><NavLink to={`/admin/order/${item._id}`}><i className="fa-solid fa-plane-departure text-black text-lg"></i></NavLink></td>
                        </tr>
                        })}
                        
                    </tbody>
                </table>
                
            </div>
        </div>
    )
}

export default Order