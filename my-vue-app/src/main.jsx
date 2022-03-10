import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import Show from './compoments/show'
  // const root = document.querySelector("#root")
  // const myName = "Giang Dep Trai"
  // const myAge = 19
  // const myStatus = true
  // const myInfor = {
  //   name: "Giang",
  //   age: 19,
  //   status: true
  // }
  // function showInfo(props){
  //   return <p>Hello {props.name}</p>
  // }
  // const ShowInfo1 = (props)=>{
  //     return <p>Hello {props.name}</p>
  // }
ReactDOM.render(
  <div>
    {/* <div>
    {showInfo({name:"Giang"})}
    </div>
    <ShowInfo1 name="Giang 69" /> */}
    <Show name="Giang Muoi diem" />
    <App />
    </div>
    
  , root
)
