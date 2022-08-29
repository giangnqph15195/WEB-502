import React, { useEffect, useState } from 'react'
import { listorder } from '../../api/order'
import { TypeCategories } from '../../type/categories'
import { TypeOrder } from '../../type/order'
import { TypeProduct } from '../../type/products'
import { TypeUser } from '../../type/user'
import {FaRegKissWinkHeart,FaCertificate,FaBoxOpen,FaFirstOrderAlt  } from "react-icons/fa";

type Props = {
  product:TypeProduct[],
  category: TypeCategories[],
  user: TypeUser[],
}

const Admin = (props: Props) => {
  const [od,setod] = useState<TypeOrder[]>([])
  console.log(props.product)
  console.log(props.category)
  useEffect(()=>{
    const getorder = async () =>{
        const {data} = await listorder()
        setod(data)
    }
    getorder()
},[])
const pd = () => {
  return  props.product.length

}
const ct = () => {
  return  props.category.length
  
}
const user = () => {
  return  props.user.length
  
}
const orders = () => {
  return  od.length
  
}
  return (
    <div className="max-w-7xl mx-auto py-6 px-4">
            <div className="border-4 border-dashed border-gray-200 rounded-lg ">
                <div className="max-w-6xl mx-auto sm:px-5 ">
                    <main className=" ">
                        <div className="mx-auto p-2">
                            {/* row */}
                            <div className="flex flex-wrap flex-row">
                                <div className="flex-shrink max-w-full px-4 w-full">
                                    <p className="text-xl font-bold mt-3 mb-5">Sales KPI</p>
                                </div>
                            </div>
                            <div className="flex flex-wrap flex-row">
                                <div className="flex-shrink max-w-full w-full">
                                    <div className="flex flex-wrap flex-row">
                                        {/* target widget */}
                                        <div className="flex-shrink max-w-full px-4 w-full sm:w-1/2 lg:w-1/4 mb-6">
                                            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg h-full p-6 relative overflow-hidden">
                                                <h3 className="text-base font-bold mb-2">Products</h3>
                                                <h2 className="text-3xl font-bold mb-4 flex">{pd()}<span className='ml-[50px]'><FaBoxOpen/></span></h2>
                                                {/* target */}
                                                <div className="flex flex-row justify-between w-full">
                                                    {/* <div className="flex items-center" title="Target">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="mr-2 bi bi-calendar-check" viewBox="0 0 16 16">
                                                            <path d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z" />
                                                            <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
                                                        </svg> 1100
                                                    </div>
                                                    <div className="flex items-center text-green-500">
                                                        +5%
                                                    </div> */}
                                                </div>
                                                {/* bg circle */}
                                                <div className="absolute ltr:-right-16 rtl:-left-16 -top-16">
                                                    <div className="bg-indigo-500 opacity-10 w-36 h-36 rounded-full shadow-lg shadow-indigo-500/10" />
                                                </div>
                                                <div className="absolute ltr:-right-4 rtl:-left-4 -top-24">
                                                    <div className="bg-indigo-500 opacity-10 w-36 h-36 rounded-full shadow-lg shadow-indigo-500/10" />
                                                </div>
                                            </div>
                                        </div>
                                        {/* target widget */}
                                        <div className="flex-shrink max-w-full px-4 w-full sm:w-1/2 lg:w-1/4 mb-6">
                                            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg h-full p-6 relative overflow-hidden">
                                                <h3 className="text-base font-bold mb-2">Categories</h3>
                                                <h2 className="text-3xl font-bold mb-4 flex">{ct()}<span className='ml-[50px]'><FaCertificate/></span></h2>
                                                {/* target */}
                                                <div className="flex flex-row justify-between w-full">
                                                    {/* <div className="flex items-center" title="Target">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="mr-2 bi bi-calendar-check" viewBox="0 0 16 16">
                                                            <path d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z" />
                                                            <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
                                                        </svg> $9,600
                                                    </div>
                                                    <div className="flex items-center text-green-500">
                                                        +25%
                                                    </div> */}
                                                </div>
                                                {/* bg circle */}
                                                <div className="absolute ltr:-right-16 rtl:-left-16 -top-16">
                                                    <div className="bg-yellow-500 opacity-10 w-36 h-36 rounded-full shadow-lg shadow-indigo-500/10" />
                                                </div>
                                                <div className="absolute ltr:-right-4 rtl:-left-4 -top-24">
                                                    <div className="bg-yellow-500 opacity-10 w-36 h-36 rounded-full shadow-lg shadow-indigo-500/10" />
                                                </div>
                                            </div>
                                        </div>
                                        {/* target widget */}
                                        <div className="flex-shrink max-w-full px-4 w-full sm:w-1/2 lg:w-1/4 mb-6">
                                            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg h-full p-6 relative overflow-hidden">
                                                <h3 className="text-base font-bold mb-2">Users</h3>
                                                <h2 className="text-3xl font-bold mb-4 flex"><span>{user()}</span><span className='ml-[50px]'><FaRegKissWinkHeart/></span></h2>
                                                {/* target */}
                                                <div className="flex flex-row justify-between w-full">
                                                    {/* <div className="flex items-center" title="Target">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="mr-2 bi bi-calendar-check" viewBox="0 0 16 16">
                                                            <path d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z" />
                                                            <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
                                                        </svg> $4500
                                                    </div>
                                                    <div className="flex items-center text-green-500">
                                                        +10%
                                                    </div> */}
                                                </div>
                                                {/* bg circle */}
                                                <div className="absolute ltr:-right-16 rtl:-left-16 -top-16">
                                                    <div className="bg-green-500 opacity-10 w-36 h-36 rounded-full shadow-lg shadow-indigo-500/10" />
                                                </div>
                                                <div className="absolute ltr:-right-4 rtl:-left-4 -top-24">
                                                    <div className="bg-green-500 opacity-10 w-36 h-36 rounded-full shadow-lg shadow-indigo-500/10" />
                                                </div>
                                            </div>
                                        </div>
                                        {/* target widget */}
                                        <div className="flex-shrink max-w-full px-4 w-full sm:w-1/2 lg:w-1/4 mb-6">
                                            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg h-full p-6 relative overflow-hidden">
                                                <h3 className="text-base font-bold mb-2">Orders</h3>
                                                <h2 className="text-3xl font-bold mb-4 flex">{orders()}<span className='ml-[50px]'><FaFirstOrderAlt/></span></h2>
                                                {/* target */}
                                                <div className="flex flex-row justify-between w-full">
                                                    {/* <div className="flex items-center" title="Target">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="mr-2 bi bi-calendar-check" viewBox="0 0 16 16">
                                                            <path d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z" />
                                                            <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
                                                        </svg> $6100
                                                    </div>
                                                    <div className="flex items-center text-red-500">
                                                        -15%
                                                    </div> */}
                                                </div>
                                                {/* bg circle */}
                                                <div className="absolute ltr:-right-16 rtl:-left-16 -top-16">
                                                    <div className="bg-pink-500 opacity-10 w-36 h-36 rounded-full shadow-lg shadow-indigo-500/10" />
                                                </div>
                                                <div className="absolute ltr:-right-4 rtl:-left-4 -top-24">
                                                    <div className="bg-pink-500 opacity-10 w-36 h-36 rounded-full shadow-lg shadow-indigo-500/10" />
                                                </div>
                                            </div>
                                        </div>
                                        {/* Sales Revenue */}

                                        {/* Net profits */}
                                        <div className="flex-shrink max-w-full px-4 w-full lg:w-1/2 mb-6">
                                            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg h-full p-6">
                                                <div className="flex pb-6">
                                                    <div className="flex flex-col">
                                                        <h3 className="text-base font-bold">Net profits</h3>
                                                    </div>
                                                </div>
                                                <div className="relative">
                                                    <canvas className="max-w-100" id="BarProfit" />
                                                </div>
                                            </div>
                                        </div>
                                        {/* Up/Cross Sell */}
                                        <div className="flex-shrink max-w-full px-4 w-full lg:w-1/2 mb-6">
                                            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg h-full p-6">
                                                <div className="flex pb-6">
                                                    <div className="flex flex-col">
                                                        <h3 className="text-base font-bold">Up/Cross Sell</h3>
                                                    </div>
                                                </div>
                                                <div className="flex flex-row">
                                                    <div className="flex-shrink max-w-full w-1/2">
                                                        <canvas className="max-w-100" id="Chartcross" />
                                                    </div>
                                                    <div className="flex-shrink max-w-full w-1/2">
                                                        <div className="text-left ml-6">
                                                            <div className="flex flex-row items-center justify-between">
                                                                <h3 className="semibold text-sm">Up Sell</h3>
                                                                <span className="text-sm text-green-500">+14%</span>
                                                            </div>
                                                            <p className="text-2xl font-bold text-indigo-500 mb-1">$6,300</p>
                                                            <div className="border-t border-gray-100 dark:border-gray-700 w-full my-2" />
                                                            <div className="flex flex-row items-center justify-between">
                                                                <h3 className="semibold text-sm">Cross Sell</h3>
                                                                <span className="text-sm text-red-500">-3%</span>
                                                            </div>
                                                            <p className="text-2xl font-bold text-indigo-500 mb-1">$3,400</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Cost Breakdown */}
                                        <div className="flex-shrink max-w-full px-4 w-full lg:w-1/2 mb-6">
                                            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg h-full p-6">
                                                <div className="flex pb-6">
                                                    <div className="flex flex-col">
                                                        <h3 className="text-base font-bold">Cost Breakdown</h3>
                                                    </div>
                                                </div>
                                                <div className="flex flex-row">
                                                    <div className="flex-shrink max-w-full w-1/2">
                                                        <canvas className="max-w-100" id="ChartCost" />
                                                    </div>
                                                    <div className="flex-shrink max-w-full w-1/2">
                                                        <div className="text-left ml-6">
                                                            <div className="flex flex-row items-center justify-between border-b border-gray-100 dark:border-gray-700 py-4">
                                                                <h3 className="font-semibold text-sm">Marketing</h3>
                                                                <p className="font-semibold text-indigo-500">$3,100</p>
                                                            </div>
                                                            <div className="flex flex-row items-center justify-between border-b border-gray-100 dark:border-gray-700 py-4">
                                                                <h3 className="font-semibold text-sm">Sales</h3>
                                                                <p className="font-semibold text-indigo-500">$2,350</p>
                                                            </div>
                                                            <div className="flex flex-row items-center justify-between border-b border-gray-100 dark:border-gray-700 py-4">
                                                                <h3 className="font-semibold text-sm">Maintenance</h3>
                                                                <p className="font-semibold text-indigo-500">$1,260</p>
                                                            </div>
                                                            <div className="flex flex-row items-center justify-between border-b border-gray-100 dark:border-gray-700 py-4">
                                                                <h3 className="font-semibold text-sm">Others</h3>
                                                                <p className="font-semibold text-indigo-500">$980</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Incremental Sales */}
                                        <div className="flex-shrink max-w-full px-4 w-full lg:w-1/2 mb-6">
                                            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg h-full p-6">
                                                <div className="flex pb-6">
                                                    <div className="flex flex-col">
                                                        <h3 className="text-base font-bold">Incremental Sales</h3>
                                                    </div>
                                                </div>
                                                <div className="relative">
                                                    <canvas className="max-w-100" id="ChartIncremental" />
                                                </div>
                                            </div>
                                        </div>
                                        {/* Sales Leaderboard */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
  )
}

export default Admin