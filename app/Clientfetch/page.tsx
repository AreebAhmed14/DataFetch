"use client"
import React from "react"
import Image from "next/image"
 import Link from "next/link"
import { useState, useEffect } from "react"
export default function Home() {
    let [data , setData] = useState([])
    let [loading , setLoading] = useState(true)
    useEffect(()=>{
  async function InnerFetching(){
      let clientdata = await fetch("https://fakestoreapi.com/products")
      let data = await clientdata.json()
      console.log(data)
      setData(data)
      setLoading(false)
    }
    InnerFetching()
    },[])
    if(loading){
      return <div className="text-center text-[36px] w-full h-screen font-[700] flex justify-center items-center"><div className="w-[80px] h-[80px] border-[10px] border-gray-300 border-b-blue-500 rounded-full animate-spin"></div></div>
    }
    else{

    
 return(
  <>



<div className='w-full h-[450px] inset-0 bg-[url("/static/fashion.jpg")]  flex-col relative bg-cover bg-center flex justify-center items-center'>
    <div className='absolute w-full h-[450px] backdrop-blur-[0px] z-10'></div>

        <p className='text-[48px] text-white font-[500] z-20'>FASHION</p>
        <div className='z-20 flex mt-2 justify-center items-center w-[120px] h-[24px]'>
           <Link href={"/"}> <span className='text-black font-[600]'>Home</span></Link>
            <span>{`>`}</span>
            <span className='text-gray-800  font-[600]'>Fashion</span>
        </div>
    </div>

  <center><h1 className="text-center text-[16px] font-[700] my-5 text-gray-600">DECORATION OR FASHION! FIND BOTH HERE..</h1></center>  


  <div className="grid grid-cols-3 max-[1000px]:grid-cols-2 max-[600px]:grid-cols-1">


 {data.map((mydata:any , item)=>{
     return(
      <div  key={item}>
      <Link href={`/Clientfetch/${mydata.id}`}><div className="my-5 m-10 rounded-md overflow-hidden shadow-2xl max-[1100px]:m-5">
        <div className="w-full h-[350px] bg-white p-10">
        <Image src={mydata.image} alt="" width={950} height={950} className="w-full h-full"/>
        </div>
       <h1 className="m-3 text-[20px] font-[600]">{mydata.title}</h1>
       {/* <p className="m-5">{mydata.description}</p> */}
       <p className="m-3 text-[18px] font-[600]">Price : <span className="text-gray-500">${mydata.price} </span></p>
       <button className="ml-3 bg-blue-500 px-5 rounded-lg test-[16px] font-[600] mb-5 py-2 hover:scale-95">Shop</button>
     </div>
     </Link>
     </div>
     )
   })
  }
  </div>
  </>
  )
 }
}
