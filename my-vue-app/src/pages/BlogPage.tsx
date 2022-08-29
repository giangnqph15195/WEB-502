import React from 'react'

type Props = {}

const BlogPage = (props: Props) => {
  return (
    <div className='max-w-5xl m-auto'>
      <h1 className='text-[27px] font-bold my-[50px]'>CÁC BÀI VIẾT NỔI BẬT</h1>
      <div className='w-[580px]'>
        <img width={600} src="https://res.cloudinary.com/dkrifqhuk/image/upload/v1661744989/asm/download_2_gtisj8.jpg" alt="" />
        <h2 className='my-[20px] text-[23px] font-bold'>Món Ăn Đường Phố Trapizzino: "Sandwich nóng" ở Italy</h2>
        <p className='text-[16px]'>Món Ăn Đường Phố Trapizzino: “Sandwich nóng” ở Italy
          Sự hấp dẫn đến từ những món ăn “đường phố” luôn khiến các thực khách không thể chối từ. Vậy nên, hôm nay Pizza Express xin được gửi tới bạn một món ăn.</p>
      </div>
      <div className='w-[580px]'>
        <img width={600} src="https://res.cloudinary.com/dkrifqhuk/image/upload/v1661744977/asm/download_dzccf1.jpg" alt="" />
        <h2 className='my-[20px] text-[23px] font-bold'>Món Ăn Đường Phố Trapizzino: "Sandwich nóng" ở Italy</h2>
        <p className='text-[16px]'>Món Ăn Đường Phố Trapizzino: “Sandwich nóng” ở Italy
          Sự hấp dẫn đến từ những món ăn “đường phố” luôn khiến các thực khách không thể chối từ. Vậy nên, hôm nay Pizza Express xin được gửi tới bạn một món ăn.</p>
      </div>
      
    </div>
  )
}

export default BlogPage