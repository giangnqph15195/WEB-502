import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  // const products = [
  //   {
  //     id: 1,
  //     name: "Product A"
  //   },
  //   {
  //     id: 2,
  //     name: "Product B"
  //   },
  //   {
  //     id: 3,
  //     name: "Product C"
  //   }
  // ]
    const [status, settatus] = useState(false)
    const [products, setProducts] = useState([
      {
            id: 1,
            name: "Product A"
          },
          {
            id: 2,
            name: "Product B"
          },
          {
            id: 3,
            name: "Product C"
          }
    ])
  return (
    <div className="App">
        <button onClick={() => settatus(!status)}>Toggled</button>
       { status ? products.map((item,index) => <div>{item.name }</div> ): ""}
    </div>
  )
}

export default App
