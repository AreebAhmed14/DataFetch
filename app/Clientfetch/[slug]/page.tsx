"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const page = ({ params }: { params: Promise<{ slug: string }> }) => {
  const [refine, setRefine] = useState<any>();

  useEffect(() => {
    async function Datafetch() {
      const { slug } = await params;
      const datas = await fetch("https://fakestoreapi.com/products");
      const refines = await datas.json()
      const result = refines.find(
        (item:any) => String(item.id) === String(slug)
      );
      setRefine(result);
    }
    Datafetch();
  },[params]);
  console.log(refine)

  if (!refine) {
    return <div className="text-center text-[36px] w-full h-screen font-[700] flex justify-center items-center"><div className="w-[80px] h-[80px] border-[10px] border-gray-300 border-b-blue-500 rounded-full animate-spin"></div></div>
    
  }

  return (
    <>
    <div className="w-full flex justify-start items-center max-[1000px]:justify-between max-[700px]:flex-col">
      <div className="w-[30%] h-[25rem] mx-5 max-[1050px]:w-[25rem] my-5 max-[450px]:w-[20rem] max-[370px]:w-[18rem] max-[370px]:h-[20rem] overflow-hidden">
        <Image
          src={refine.image}
          alt="Product"
          width={300}
          height={300}
          className="w-full h-full"
        />
      </div>
      <div className="w-[60%] h-auto my-5 mx-5 max-[700px]:w-[90%] max-[370px]:h-auto max-[370px]:my-5">
          <p className="text-2xl uppercase font-[700] m-5 max-[890px]:text-[22px] max-[370px]:m-2 max-[370px]:my-4">{refine.title}</p>
          <p className="text-xl font-[600] m-5 max-[370px]:m-2 max-[370px]:my-4">Price : {refine.price} $</p>
          <p className="text-xl font-[600] m-5 max-[370px]:m-2 max-[370px]:my-4">Rating : <span className="text-yellow-400">{refine.rating.rate}</span></p>
          <p className="text-[17px] font-[600] m-5 max-[370px]:m-2 max-[370px]:my-4 max-[400px]:text-[14px]">{refine.description}</p>
          <button className="bg-blue-500 px-3 py-2 rounded-lg mx-4 text-white hover:scale-95 transition-all my=5">Add to Cart</button>
      </div>
    </div>
      
    </>
  );
};
export default page;
