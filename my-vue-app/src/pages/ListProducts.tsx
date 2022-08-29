import React from 'react'

type Props = {}

const ListProducts = (props: Props) => {
  return (
    <div>
      <div className="flex justify-center">
        <div className='flex my-[80px]'>
          <div className='mr-[30px]'>
            <h1 className='text-[18px] font-bold'>CÔNG TY TNHH PIZZA CAPICHI VIỆT NAM</h1>
            <p className='leading-9'>
              <span>Để đặt bánh pizza, vui lòng liên hệ tổng đài số: 024.36.888.777</span> <br />
              <span>Để phản ánh chất lượng dịch vụ, vui lòng gọi số: 0989.139.565</span> <br />
              <span>Email: giangquy2706@gmail.com</span>
            </p>
            <h3 className='text-[18px] font-bold'>CÁC CƠ SỞ PIZZA Capichi</h3>

            <main className='group flex hover:bg-[#dc3545] my-[20px]'>
              <div className='mt-[10px] mr-[10px] ml-[5px]'>
                <img src="https://res.cloudinary.com/dkrifqhuk/image/upload/v1661739376/asm/so_01_ukleic.png" alt="" />
              </div>
              <div >
                <h3 className='group-hover:text-white'>Pizza Capichi Ngọc Khánh</h3>
                <h5 className='group-hover:text-white text-[12px]'>107 D3 Ngọc Khánh, Ba Đình</h5>

                <a className='group-hover:text-yellow-300 text-[14px] text-[#c00a27]'
                  href="https://maps.google.com?saddr=Current+Location&amp;daddr=21.027807,105.817630"><i
                    className="fas fa-location-arrow mx-[5px]"></i>
                  Xem trên bản đồ lớn</a>
              </div>
            </main>

            <main className='group flex hover:bg-[#dc3545] my-[20px]'>
              <div className='mt-[10px] mr-[10px] ml-[5px]'>
                <img src="https://res.cloudinary.com/dkrifqhuk/image/upload/v1661739381/asm/so_02_ljzxxq.png" alt="" />
              </div>
              <div >
                <h3 className='group-hover:text-white'>Pizza Capichi Nguyễn Trãi</h3>
                <h5 className='group-hover:text-white text-[12px]'>Số 14 Ngõ 497 Nguyễn Trãi, Thanh Xuân</h5>

                <a className='group-hover:text-yellow-300 text-[14px] text-[#c00a27]'
                  href="https://maps.google.com?saddr=Current+Location&amp;daddr=21.027807,105.817630"><i
                    className="fas fa-location-arrow mx-[5px]"></i>
                  Xem trên bản đồ lớn</a>
              </div>
            </main>

            <main className='group flex hover:bg-[#dc3545] my-[20px]'>
              <div className='mt-[10px] mr-[10px] ml-[5px]'>
                <img src="https://res.cloudinary.com/dkrifqhuk/image/upload/v1661739387/asm/so_03_haolcx.png" alt="" />
              </div>
              <div >
                <h3 className='group-hover:text-white'>Pizza Capichi Mỹ Đình</h3>
                <h5 className='group-hover:text-white text-[12px]'>6 Đồng Bát, Cầu Giấy</h5>

                <a className='group-hover:text-yellow-300 text-[14px] text-[#c00a27]'
                  href="https://maps.google.com?saddr=Current+Location&amp;daddr=21.027807,105.817630"><i
                    className="fas fa-location-arrow mx-[5px]"></i>
                  Xem trên bản đồ lớn</a>
              </div>
            </main>

            <main className='group flex hover:bg-[#dc3545] my-[20px]'>
              <div className='mt-[10px] mr-[10px] ml-[5px]'>
                <img src="https://res.cloudinary.com/dkrifqhuk/image/upload/v1661739392/asm/so_04_m9gq6b.png" alt="" />
              </div>
              <div >
                <h3 className='group-hover:text-white'>Pizza Capichi Hoàng Mai</h3>
                <h5 className='group-hover:text-white text-[12px]'>52 Kim Đồng, Hoàng Mai</h5>

                <a className='group-hover:text-yellow-300 text-[14px] text-[#c00a27]'
                  href="https://maps.google.com?saddr=Current+Location&amp;daddr=21.027807,105.817630"><i
                    className="fas fa-location-arrow mx-[5px]"></i>
                  Xem trên bản đồ lớn</a>
              </div>
            </main>



          </div>
          <div id="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.8638558814273!2d105.74459841478469!3d21.038132792834414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313454b991d80fd5%3A0x53cefc99d6b0bf6f!2zVHLGsOG7nW5nIENhbyDEkeG6s25nIEZQVCBQb2x5dGVjaG5pYw!5e0!3m2!1svi!2s!4v1637153598948!5m2!1svi!2s"
              width="100%" height="550" className='w-[600px]' loading="lazy"></iframe>
          </div>
        </div>

      </div>
     
    </div>
  )
}

export default ListProducts