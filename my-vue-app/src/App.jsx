import React, { useState, useEffect } from 'react'
import logo from './logo.svg'
import './App.css'
import React,{Ro} from 'react'


export default function App(props){
  const [products, setproducts] = useState([])

  useEffect(()=>{
    const getPD = async () => {
      const respon = await fetch("http://localhost:3001/api/products")
      const data = await respon.json()
      setproducts(data)
    }
    getPD()
  })

  return (
    <div className="App">
       {products.map((item,index) => <div>{item.name }</div> )}
    </div>

  )

  

}


// function App() {
//     const [status, settatus] = useState(false)
//     const [products, setProducts] = useState([])
//   useEffect(()=> {
//     const getPD = async () => {
//       const respon = await fetch("http://localhost:3001/api/products")
//       const data = await respon.json()
//       setProducts(data)
//     }
//     getPD()
//   })

//   return (
//     <div className="App">
//         <button onClick={() => settatus(!status)}>Toggled</button>
//        { status ? products.map((item,index) => <div>{item.name }</div> ): ""}

//     </div>
//   )
// }

// export default App
