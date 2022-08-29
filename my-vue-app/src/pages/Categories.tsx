
import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { getall, read } from '../api/categories'
import { TypeCategories } from '../type/categories'
import { TypeProduct } from '../type/products'
import Products from './Admin/Products'
import { Card } from 'antd';
import { Carousel } from 'antd';
import NumberFormat from "react-number-format";
import styles from './OtherNumberFormat.module.scss'


const { Meta } = Card;


type Props = {}

const Categories = (props: Props) => {
  const [categories, setcategories] = useState<TypeCategories[]>([])
  const [categoriesPD, setcategoriesPD] = useState<TypeCategories | TypeProduct[]>([])
  const { slug } = useParams()
  console.log(slug)
  useEffect(() => {
    const getCate = async () => {
      const { data: cates } = await getall()
      setcategories(cates)
    }
    getCate()
  }, [slug])

  useEffect(() => {
    const getCatePd = async () => {
      const { data: { products } } = await read(slug)
      // console.log(products);

      setcategoriesPD(products)
    }
    getCatePd()
  }, [slug])

  return (
    <div className='mb-[90px]'>
      <Carousel autoplay>    
          <div>
          <img src="https://res.cloudinary.com/dkrifqhuk/image/upload/v1645592616/asm/ryrjfbma5dup7ckgwg1x.png" alt="" />
          </div>
          <div>
          <img src="https://res.cloudinary.com/dkrifqhuk/image/upload/v1645592616/asm/ryrjfbma5dup7ckgwg1x.png" alt="" />
          </div>
      </Carousel>
      <div className="flex justify-center">
        <img className="h-1 mt-8" src="https://res.cloudinary.com/dkrifqhuk/image/upload/v1644632592/asm/line_title_v9kuva.png" alt="" />
        <p className="mt-4 mx-8 text-lg font-bold">THỰC ĐƠN</p>
        <img className="h-1 mt-8" src="https://res.cloudinary.com/dkrifqhuk/image/upload/v1644632592/asm/line_title_v9kuva.png" alt="" />
      </div>
      <div className="flex justify-center">
        {categories.map((item, index) => {
          return <div key={index} className="mx-8 mb-20">
            <NavLink to={`/category/${item.slug}`}>
              <img width="40" src={`${item.image}`} alt="" />
              <p className="text-center font-medium text-orange-400 text-xl my-2">{item.name}</p>
            </NavLink>
          </div>
        })}



      </div>

      <div className='m-auto max-w-7xl grid grid-cols-4 gap-4'>
        {categoriesPD.map((item) => {
          return  <div className="container mx-0 px-0 h-96">
          <div className="trip mx-0 px-0">
            <div className="item mx-0 px-0">
              <img width="1000px" src={`${item.image}`} alt="" />
              <h2 className='text-center my-2 text-lg'>{item.name}</h2>
              
              <p className='text-center text-orange-500'><NumberFormat className='text-center font-bold'
                thousandsGroupStyle="thousand"
                value={item.price}
                prefix="$"
                // decimalSeparator="."
                thousandSeparator={true}
                allowNegative={true} /></p>
              <NavLink className="ml-1" to={`/products/${item._id}`}><button className='bg-orange-700 text-white py-1.5 px-3 ml-20 rounded-2xl text-lg mt-8'>Mua hàng</button></NavLink>
            </div>
            <div className="info pt-4 pl-3">
            <h5 className='text-orange-800 text-lg'>{item.name}</h5>
            <span className='font-bold text-xl'>Thành phần</span> <br /> <br />
              <span className=''>{item.description}</span>
              

            </div>
          </div>
        </div>
        })}
      </div>


    </div>
  )
}

export default Categories