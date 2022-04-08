import React, { useEffect, useState } from 'react'
import { TypeCart } from '../../type/cart'
import { useParams } from 'react-router-dom'
import { listdetailorder, listinfo } from '../../api/order'
import NumberFormat from "react-number-format";
import styles from './OtherNumberFormat.module.scss'
import { TypeOrder } from '../../type/order';

type Props = {}

const DetailOrder = (props: Props) => {
    const [order, setorder] = useState<TypeCart[]>([])
    const [info, setinfo] = useState<TypeOrder>()
    const { id } = useParams()
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

    return (
        <div><h1>
            DetailOrder
        </h1>

            <h1 className='text-center font-bold text-lg'>Order</h1>
            <div className='flex'>
                <table className="table table-striped table-hover w-9/12">
                    <thead className='table-dark'>
                        <tr className='text-center'>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Image</th>
                            <th scope="col">Price</th>
                            <th scope="col">Quantiny</th>
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
                                    />
                                    </td>
                                <td scope="col">{item.quantiny}</td>
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
                    <label className='inffo'>Status</label>:{info?.status}
                </div>
            </div>
        </div>
    )
}

export default DetailOrder