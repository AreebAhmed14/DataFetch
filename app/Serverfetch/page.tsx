import React from "react"
import Link from "next/link"
export default async function Home(){
    let data = await fetch("https://simple-books-api.glitch.me/books/")
    let parsedata = await data.json()
    console.log(parsedata)
  return(
    <>


<div className='w-full h-[450px] inset-0 bg-[url("/static/fashion.jpg")]  flex-col relative bg-cover bg-center flex justify-center items-center'>
    <div className='absolute w-full h-[450px] backdrop-blur-[0px] z-10'></div>

        <p className='text-[48px] text-white font-[500] z-20'>NOVEL</p>
        <div className='z-20 flex mt-2 justify-center items-center w-[120px] h-[24px]'>
           <Link href={"/"}> <span className='text-black font-[600]'>Home</span></Link>
            <span>{`>`}</span>
            <span className='text-gray-800  font-[600]'>Novels</span>
        </div>
    </div>

    <div>
      <h1 className="text-center text-[16px] font-[700] my-5 text-gray-600">DISCOVER YOUR FAVORITE NOVELS HERE</h1>  
      <div className="grid grid-cols-3 max-[1162px]:grid-cols-2 max-[745px]:grid-cols-1">
        {parsedata.map((datas:any , item:any)=>(
          <div key={item} className=" shadow-xl bg-slate-100 my-6 mx-3 rounded-lg flex flex-col">
              <p className=" text-[30px] font-[700] pl-3 uppercase py-2 max-[1162px]:text-[26px] max-[500px]:text-[22px]">{datas.name}</p>
              <p className=" pl-3 text-[20px]">Type : <span className="font-[500] capitalize py-2">{datas.type}</span></p>
              <p className={`${datas.available?"text-green-500":"text-red-500"} text-[18px] font-[500] pl-3  py-2`}>{datas.available? "Available" : "Unavailable"}</p>
              <button className={`${datas.available?"text-white":"text-gray-500"} ${datas.available?"bg-blue-500":"bg-gray-200"} py-2 rounded-md shadow-md hover:scale-95 ml-3 my-3 w-[100px]`}>{datas.available?"View":"Unavailable"}</button>
          </div>
            
          )
        )}
        </div>
    </div>
    </>
  )
}