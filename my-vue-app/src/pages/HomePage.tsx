import React, { useEffect, useState } from 'react'
import { Card } from 'antd';
import { NavLink } from 'react-router-dom';
import { TypeProduct } from '../type/products';
import { getall } from '../api/categories'
import { TypeCategories } from '../type/categories';
// import Item from 'antd/lib/list/Item';
import { Carousel } from 'antd';
import NumberFormat from "react-number-format";
import styles from './OtherNumberFormat.module.scss'

const { Meta } = Card;

type Props = {
  product: TypeProduct[]
}

const HomePage = (props: Props) => {
  const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };
  const [categories, setcategories] = useState<TypeCategories[]>([])

  useEffect(() => {
    const getCate = async () => {
      const { data: cates } = await getall()
      setcategories(cates)
    }
    getCate()
  }, [])
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

        {/* <Carousel autoplay> */}


      </div>
      <div className="flex justify-center">
        {categories.map((item, index) => {
          return <div className="mx-8 mb-20">
            <NavLink to={`category/${item.slug}`}>
              <img width="40" src={`${item.image}`} alt="" />
              <p className="text-center font-medium text-orange-400 text-xl my-2">{item.name}</p>
            </NavLink>
          </div>
        })}

      </div>


      <div className='m-auto max-w-7xl grid grid-cols-4 gap-4'>

        {props.product.map((item, index) => {
          return <div className="container mx-0 px-0 h-96">
            <div className="trip mx-0 px-0">
              <div className="item mx-0 px-0">
                <img width="1000px" src={`${item.image}`} alt="" />
                <h2 className='text-center my-2 text-lg'>{item.name}</h2>
                
                <p className='text-center text-orange-500'><NumberFormat className='text-center font-bold'
                  thousandsGroupStyle="thousand"
                  value={item.price}
                  prefix="$"
                  // decimalSeparator="."
                  displayType='text'
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

        {/* <Card
                  hoverable
                  style={{ width:230}}
                  cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                >
                  <Meta className='text-center' title="Pizza One Shot" description="17000" />
                  <button className='bg-orange-600 p-2 rounded-xl mt-2 ml-12'>Mua Hàng</button>
                </Card> */}
        {/* <Card
                  hoverable
                  style={{ width:230}}
                  cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                >
                  <Meta className='text-center' title="Pizza One Shot" description="17000" />
                  <button className='bg-orange-600 p-2 rounded-xl mt-2 ml-12'>Mua Hàng</button>
                </Card>
                <Card
                  hoverable
                  style={{ width:230}}
                  cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                >
                  <Meta className='text-center' title="Pizza One Shot" description="17000" />
                  <button className='bg-orange-600 p-2 rounded-xl mt-2 ml-12'>Mua Hàng</button>
                </Card> */}
      </div>

    </div>
  )
}

export default HomePage