import React, { isValidElement, useState } from 'react'
import {NavLink, Outlet} from 'react-router-dom'
import { check  } from '../utils/localSgate'
type Props = {}

const Websitelayout = (props: Props) => {
  
  



  const [user, setuser] = useState(1)

  const addressUser = () => {
    if(localStorage.getItem('user')){
      return JSON.parse(localStorage.getItem('user')as string).user._id
    }
  }

  const isAuthenticate = () =>{
    
    // if(typeof window === "undefined") return;
    // if(localStorage.getItem(key)){
    //     return JSON.parse(localStorage.getItem(key) as string)
    // } else {
    //     return false
    // }
    const result = JSON.parse(localStorage.getItem('user') as string);

    if(localStorage.getItem('user')){
        return<div className=""> 
        <NavLink className="text-sm text-gray-700" onClick={()=>{ localStorage.removeItem('user') ; setuser(0)}} to="/">Đăng Xuất</NavLink> <br />
        <NavLink className="text-sm text-gray-700" to={`order/${JSON.parse(localStorage.getItem('user')as string).user._id}`}>Đơn Hàng</NavLink>
        </div>
    }
    else{
        return (
            <div className="">
                <NavLink className="text-sm text-gray-700 "  to={'/signin'}>Đăng nhập</NavLink> <br />
                <NavLink className="text-sm text-gray-700 "  to={'/signup'}>Đăng ký</NavLink>
            </div>
        ) 
        
    }
   
}


  return (
    <div>
    <header className=''>
      <div className="bg-red-700 py-2 px-20 flex m-auto ">
                <a href="#">
                    <img src="https://res.cloudinary.com/dkrifqhuk/image/upload/v1645017092/asm/footer_logo1_gvkbmr.png" className="mx-auto w-40 mt-2" alt="" />
                </a>
                <p className="my-4 mx-8 text-white">Pizza ngon - Giá rẻ - Vận chuyển tận nhà</p>
                
                <div className='ml-60'>
                <NavLink to={`cart/${addressUser()}`}>
                <button className='bg-red-800 ml-96 px-4 rounded-md py-3 text-white mr-2 hover:bg-black hover:text-orange-700'>
                <i className="fa-solid fa-cart-arrow-down mr-2"></i> 
                Giỏ Hàng
                </button>
                </NavLink>
                </div>
                <div className='mt-2 '>
                <a href="" className='headeracc text-white text-3xl bg-red-800 rounded-md px-2 py-2 hover:bg-black hover:text-orange-700'> 
                  <i className="fas fa-user header__acc-icon"></i>
                {/* {isAuthenticate()} */}
                <div className='validater bg-white rounded-md absolute'>
                  <ul className='pr-2 pl-2 mb-[10px]'>
                    {isAuthenticate()}
                    {check()}
                  </ul>
                </div> 

                </a>
                </div>
                
     </div>
            <div className="bg-red-600 flex">
            <ul className='flex p-0 mb-[0px]'>
          <li className='menu_list'><NavLink className='text-white hover:text-orange-500'  to='/'>Home Page</NavLink></li>
          <li className='menu_list'><NavLink className='text-white hover:text-orange-500' to='/products'>Contact Page</NavLink></li>
          <li className='menu_list'><NavLink className='text-white hover:text-orange-500' to='/blog'>Blog Page</NavLink></li>
          <li className='justify-center mx-20 my-8'>
           <div className=''>
                <span className='text-white text-sm text-center'>Gọi điện ngay - Ship liền tay(24/7)</span>
              <div> 
                <span className='mx-8 text-yellow-400 text-xl'>(024)36777888</span>
              </div>  
           </div>
          </li>
        </ul>
               
                
            </div>
            
        
        
      </header>


     <Outlet/>
     <div className=' bg-[url(https://www.pizzaexpress.vn/wp-admin/admin-ajax.php?action=kc_get_thumbn&type=filter_url&id=%2Fwp-content%2Fuploads%2F2018%2F05%2Ffooter_top_bg.png)]'>
        <div className='flex max-w-7xl m-auto py-[50px]'>
          <div className="block px-[15px]">
            <div className='ml-[120px] my-[20px]' >
              <img className="" src="https://res.cloudinary.com/dkrifqhuk/image/upload/v1661742326/asm/footer_01_e5c2fg.png" alt="" />
            </div>
            <div className="text-[20px] ">
              <h3 className='text-[#c00a27] text-center'>Chất lượng dẫn đầu</h3>
            </div>
            <div className="">
              <p className='text-center leading-6'>Chú trọng khâu tuyển chọn đội ngũ đầu bếp chuyên nghiệp, thực đơn của Pizza
                Capichi
                luôn được đổi mới, đa dạng với pizza nhiều hương vị, sandwich, mỳ ý và các món
                ăn
                nhanh khác.</p>
            </div>
          </div>

          <div className="block px-[15px]">
            <div className='ml-[120px] my-[20px]' >
              <img className="" src="https://res.cloudinary.com/dkrifqhuk/image/upload/v1661742333/asm/footer_02_k0lrpm.png" alt="" />
            </div>
            <div className="text-[20px] ">
              <h3 className='text-[#c00a27] text-center'>GIAO HÀNG ĐÚNG GIỜ</h3>
            </div>
            <div className="">
              <p className='text-center leading-6'>Để tăng cường sự tin tưởng và yên tâm với khách hàng, Pizza Capichi cam kết luôn
                giao hàng đúng giờ và chi phí giao hàng rẻ nhất để đảm bảo khách hàng có thể
                nhận bánh trong thời gian nhanh nhất.</p>
            </div>
          </div>

          <div className="block px-[15px]">
            <div className='ml-[120px] my-[20px]' >
              <img className="" src="https://res.cloudinary.com/dkrifqhuk/image/upload/v1661742341/asm/footer_03_tokhjm.png" alt="" />
            </div>
            <div className="text-[20px] ">
              <h3 className='text-[#c00a27] text-center'>Pizza Take Away</h3>
            </div>
            <div className="">
              <p className='text-center leading-6'>Lựa chọn cho mình một hướng đi mới để tạo nên sự khác biệt, mô hình Pizza take
                away - pizza mang đi giúp khách hàng tiết kiệm thời gian, đem đến sự tiện lợi
                tối ưu trong việc lựa chọn, thanh toán, đóng gói và nhận hàng.</p>
            </div>
          </div>

          <div className="block px-[15px]">
            <div className='ml-[120px] my-[20px]' >
              <img className="" src="https://res.cloudinary.com/dkrifqhuk/image/upload/v1661742346/asm/footer_04_oe5s1b.png" alt="" />
            </div>
            <div className="text-[20px] ">
              <h3 className='text-[#c00a27] text-center'>Phục vụ chuyên nghiệp</h3>
            </div>
            <div className="">
              <p className='text-center leading-6'>Pizza Capichi cùng với đội ngũ nhân viên mang đầy sức trẻ và nhiệt huyết, chúng
                tôi luôn mong muốn đem lại cho khách hàng của mình chất lượng dịch vụ tốt nhất,
                luôn lắng nghe và chăm sóc những nhu cầu dù là nhỏ nhất của Quý khách.</p>
            </div>
          </div>




        </div>


      </div>
     <footer className="bg-[#252c4f] text-white py-2 bg-[url('https://res.cloudinary.com/dkrifqhuk/image/upload/v1645442366/asm/footer_bg_uppyg7.jpg')]">
            <h2 className="text-3xl text-yellow-300 text-center my-2">CÔNG TY TNHH PIZZA EXPRESS VIỆT NAM</h2>
            <p className="text-center my-4">Để đặt bánh pizza, vui lòng liên hệ tổng đài số: 024.36.888.777</p>
            <p className="text-center my-4">Để phản ánh chất lượng dịch vụ, vui lòng gọi số: 0989.139.565</p>
            <p className="text-center my-4">Email: lienhepizzaexpress@gmail.com</p>
            <p className="text-center my-4">Chính sách bảo mật thông tin cá nhân</p>
            <p className="text-center my-4">Chính sách đổi/trả sản phẩm và hoàn tiền</p>
            <p className="text-center my-4">Chính sách thanh toán</p>
            <div className="max-w-5xl m-auto flex my-16">
                <div className="mx-2">
                  <img width="65" className="mx-16 my-2" src="https://res.cloudinary.com/dkrifqhuk/image/upload/v1645442757/asm/so_01_kauzh8.png" alt="" />
                    <p className="text-yellow-300">107 D3 Ngọc Khánh, Ba Đình</p>
                </div>
                <div className="mx-8">
                  <img width="65" className="mx-16 my-2" src="https://res.cloudinary.com/dkrifqhuk/image/upload/v1645442765/asm/so_02_fe8vz2.png" alt="" />
                    <p className="text-yellow-300">107 D3 Ngọc Khánh, Ba Đình</p>
                </div >
                <div className="mx-8">
                  <img width="65" className="mx-16 my-2" src="https://res.cloudinary.com/dkrifqhuk/image/upload/v1645442772/asm/so_03_wvlyso.png" alt="" />
                    <p className="text-yellow-300">107 D3 Ngọc Khánh, Ba Đình</p>
                </div>
                <div className="mx-2">
                  <img width="65" className="mx-16 my-2" src="https://res.cloudinary.com/dkrifqhuk/image/upload/v1645442772/asm/so_04_b4tycl.png" alt="" />
                    <p className="text-yellow-300">107 D3 Ngọc Khánh, Ba Đình</p>
                </div>
            </div>
            <p className="text-center my-4">Công ty TNHH Pizza Express Việt Nam Số ĐKKD: 0106675108</p>
            <p className="text-center my-4">Địa Chỉ: Số 352 Đường Bưởi, P.Vĩnh Phúc, Q.Ba Đình, TP.Hà Nội</p>
            <p className="text-center my-4">Số điện thoại: 02436888777</p>
            <p className="text-center my-4">Email: lienhepizzaexpress@gmail.com</p>
        </footer>
    </div>
    
    
  )
}

export default Websitelayout