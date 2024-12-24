import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <>
    <div className='w-full h-screen flex justify-center items-center flex-col bg-slate-900'>
     <center> <div className=' text-blue-500 my-5 text-[40px] max-[400px]:text-[30px] font-[700]'>WELCOME TO BUY <span className='text-green-500 px-2'> LINGO</span> STORE</div></center>
     <center> <div className=' text-blue-500 text-[30px] max-[400px]:text-[25px] font-[700]'>WHAT YOU ARE <span className='text-green-500 px-3'> LOOKING</span> FOR ?</div></center>
      <div className='flex'>
       <Link href={"/Serverfetch"}> <button className='px-5 py-3 m-5 rounded-md text-white font-[700] text-[25px] bg-blue-500 hover:scale-95 hover:bg-green-500 cursor-pointer mr-10 my-10 max-[385px]:mr-4 max-[385px]:px-3 max-[385px]:py-2 max-[385px]:text-[20px]'>NOVELS</button></Link>
       <Link href={"/Clientfetch"}> <button className='px-5 py-3 m-5 rounded-md text-white font-[700] text-[25px] bg-blue-500 hover:scale-95 hover:bg-green-500 cursor-pointer ml-10 my-10 max-[385px]:ml-4 max-[385px]:px-3 max-[385px]:py-2 max-[385px]:text-[20px]'>FASION</button></Link>
      </div>
      </div>
    </>
  )
}

export default page
