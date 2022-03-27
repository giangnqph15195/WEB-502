import React from 'react'
import { Card } from 'antd';
import { NavLink } from 'react-router-dom';

const { Meta } = Card;

type Props = {}

const HomePage = (props: Props) => {
  return (
    <div>
      <div className="flex justify-center">
              <img className="h-1 mt-8" src="https://res.cloudinary.com/dkrifqhuk/image/upload/v1644632592/asm/line_title_v9kuva.png" alt="" />
                <p className="mt-4 mx-8 text-lg font-bold">THỰC ĐƠN</p>
              <img className="h-1 mt-8" src="https://res.cloudinary.com/dkrifqhuk/image/upload/v1644632592/asm/line_title_v9kuva.png" alt="" />
            </div>
            <div className="flex justify-center">
            
                <div className="mx-8 mb-20">
                    <a href="/category/${cate.id}">
                      <img  width="40" src="https://res.cloudinary.com/dkrifqhuk/image/upload/v1645019430/asm/icon_pizza_ucvh3k.png" alt="" />
                        {/* <img width="40" src="${cate.img}"> */}
                        <p className="text-center font-medium text-orange-400 text-xl my-2">Pizaa</p>
                    </a>
                </div>
                </div>


                <div className='m-auto max-w-7xl grid grid-cols-4 gap-4'>
                <NavLink to='deltais'><Card
                  hoverable
                  style={{ width:230}}
                  cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                >
                  <Meta className='text-center' title="Pizza One Shot" description="17000" />
                  <button className='bg-orange-600 p-2 rounded-xl mt-2 ml-12'>Mua Hàng</button>
                </Card></NavLink>
                <Card
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
                </Card>
                <Card
                  hoverable
                  style={{ width:230}}
                  cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                >
                  <Meta className='text-center' title="Pizza One Shot" description="17000" />
                  <button className='bg-orange-600 p-2 rounded-xl mt-2 ml-12'>Mua Hàng</button>
                </Card>
                </div>
    </div>
  )
}

export default HomePage