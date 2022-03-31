
import React, {useEffect, useState} from 'react'
import {NavLink ,useParams} from 'react-router-dom'
import { getall, read } from '../api/categories'
import { TypeCategories } from '../type/categories'
import { TypeProduct } from '../type/products'
import Products from './Admin/Products'
 
type Props = {}

const Categories = (props: Props) => {
  const [categories, setcategories] = useState<TypeCategories[]>([])
  const [categoriesPD, setcategoriesPD] = useState<TypeCategories | TypeProduct[]>([])
  const {slug} = useParams()
  // console.log(slug)
  useEffect(()=>{
    const getCate = async () => {
      const {data : cates} = await getall()
      setcategories(cates)
    }
    getCate()
  },[slug])

  useEffect(()=>{
    const getCatePd = async () => {
      const { data : catePD } = await read(slug) 
      setcategoriesPD(catePD)
    }
    getCatePd()
  },[])
  return (
    <div>
       <div className="flex justify-center">
              <img className="h-1 mt-8" src="https://res.cloudinary.com/dkrifqhuk/image/upload/v1644632592/asm/line_title_v9kuva.png" alt="" />
                <p className="mt-4 mx-8 text-lg font-bold">THỰC ĐƠN</p>
              <img className="h-1 mt-8" src="https://res.cloudinary.com/dkrifqhuk/image/upload/v1644632592/asm/line_title_v9kuva.png" alt="" />
            </div>
            <div className="flex justify-center">
            {categories.map((item, index)=>{
              return <div className="mx-8 mb-20">
                <NavLink to={`category/${item.slug}`}>
                <img  width="40" src={`${item.image}`} alt="" />
                  <p className="text-center font-medium text-orange-400 text-xl my-2">{item.name}</p>
                </NavLink>
          </div>
            })}


            {/* {categoriesPD.map((item) => {
              return <div>
                {item.name}
              </div>
            })} */}
                </div>

              
    </div>
  )
}

export default Categories