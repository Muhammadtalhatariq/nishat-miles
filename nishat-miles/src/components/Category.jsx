import React from 'react'

const Category = () => {
  return (
    <>
      <div className='pt-8 md:h-[1095px] text-orange-700'>
        <div className='p-2 flex items-center justify-center '>
          <h1 className='font-semibold text-center text-2xl border-b border-[#D9D9D9]'>SHOP BY CATEGORY</h1>
        </div>
        <div className='flex w-full h-screen flex flex-wrap md:flex-nowrap'>
          <div className='left md:w-1/2 w-full relative'>
          <div className='w-full h-full'>
            <img src="/img1c.webp" alt="" />
            <h2 className='text-center p-2 hover:bg-[#DCB95F] duration-500 font-medium'>UNSTITCHED</h2>
          </div>

          <div className='bg-green-900 w-full h-[430px] absolute -bottom-105'>
           <div className='flex gap-2'> 
           <div >
              <img src="/img2c.avif" alt="" />
            </div>
            <div>
              <img src="/img3c.avif" alt="" />
            </div>
           </div>
          </div>
          </div>
          <div className='right h-[1000px] md:w-1/2 w-full'>
            <div className=' w-full h-1/3 flex gap-3'>
            <div>
              <img src="/img2c.avif" alt="" />
            </div>
            <div>
              <img src="/img3c.avif" alt="" />
            </div>
            </div>
            <div>
              <img src="/img4c.webp" alt="" />
            </div>
          </div>
        </div>
     
       

        {/* <div className='flex relative'>
          <div className='absolute top-0 left-0 w-full h-full'>
            <img src="/img1c.webp" alt="" />
            <h2 className='text-center p-2 hover:bg-[#DCB95F] duration-500 font-medium'>UNSTITCHED</h2>
          </div>

         <div className='absolute top-110 md:top-0  md:-right-2 w-full bg-red-400 h-full flex gap-2'>
         <div >
            <img src="/img2c.avif" alt="" />
            <h2 className='text-center p-2 hover:bg-[#DCB95F] duration-500 font-medium'>LUXURY</h2>
          </div>
          <div>
            <img src="/img3c.avif" alt="" />
            <h2 className='text-center p-2 hover:bg-[#DCB95F] duration-500 font-medium'>READY TO STITCH</h2>
          </div>
         </div>

            <div className='absolute top-165 left-0 right-0 w-full h-full flex gap-2'>
          <div>
          <img src="/img4c.webp" alt="" />
          <h2 className='text-center p-2 hover:bg-[#DCB95F] duration-500 font-medium'>READY TO STITCH</h2>
          </div>
          </div>

        </div> */}
      </div>
      <div className='w-full h-60 bg-gray-300'>5</div>
    </>
  )
}

export default Category
