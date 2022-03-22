import React from 'react'
import { Iproduct } from '../type/product'


type ProductLists ={
    products: Iproduct[],
    onRemove: (id:number) =>void
}
const ProductList = (props: ProductLists ) => {
  return (
    <div>
        <table>
            <thead>
                <th>#</th>
                <th>Name</th>
                <th>Price</th>
            </thead>
            <tbody>
                {props.products.map((item, index) => {
                    return <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{item.name}</td>
                        <td>{item.price}</td>
                        <td><button onClick={() => props.onRemove(item.id)}>Remove</button></td>
                    </tr>
                })}
            </tbody>
        </table>
    </div>
  )
}

export default ProductList