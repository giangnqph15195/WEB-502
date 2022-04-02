
import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { getall, read } from '../api/categories'
import { TypeCategories } from '../type/categories'
import { TypeProduct } from '../type/products'
import Products from './Admin/Products'
import { Card } from 'antd';
import { Carousel } from 'antd';


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
    <div>
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
          return <NavLink to={`/products/${item._id}`}>
            <Card
              hoverable
              style={{ width: 230 }}
              cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            >
              <Meta className='text-center' title={`${item.name}`} description={`${item.price}`} />
              <button className='bg-orange-600 p-2 rounded-xl mt-2 ml-12'>Mua Hàng</button>
            </Card></NavLink>
        })}
      </div>


    </div>
  )
}

export default Categories