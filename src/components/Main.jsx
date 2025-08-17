import React from 'react'

const Main = () => {
    return (

        <div className='flex justify-center items-center'>
            <div className="container flex  h-[90vh] w-[800px]">
                <div className=" left-article w-[50%]">

                    <h1 className='text-[80px] leading-[80px] font-extrabold'>YOUR FEET
                        DESERVE
                        THE BEST</h1>

                    <div className="ptag"></div>
                        <p className='text-[10px] font-semibold text-gray-800 w-[400px]'>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
                    
                    <div className="buttons flex gap-4">
                        <button className='bg-[#d01c28] text-white'>Shop Now</button>

                        <button className='bg-white border border-1px text-gray-800 '>Category</button>
                    </div>

                    <p className='text-[10px] text-gray-800'>Also Available On</p>

                    <div className="sites flex ">
                        <img className='w-[30px] h-[32px]' src="../public/images/flipkart.png" alt="" />

                        <img className='w-[30px] h-[32px]' src="../public/images/amazon.png" alt="" />
                    </div>

                </div>

                <div className="right-pic w-[50%] flex items-center justify-center">
                    <img src="../public/images/shoe_image.png" alt="" />
                </div>
            </div>
        </div>

    )
}

export default Main
