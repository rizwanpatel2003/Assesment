"use client"
import { useState } from 'react';
import Card from "@/components/ui/card";
export default function Home() {
 
  const cards = [
      { id: 1, title: 'Card 1', content: 'Content for Card 1' },
      { id: 2, title: 'Card 2', content: 'Content for Card 2' },
      { id: 3, title: 'Card 3', content: 'Content for Card 3' },
      { id: 4, title: 'Card 4', content: 'Content for Card 4' },
  ];
  return (
     <>
     <div className="w-full h-screen bg-black flex flex-col    items-center gap-5 ">
         <div className="h-[8%] w-full bg-red-200 text-black  flex justify-evenly shadow-md shadow-white ">
           <div className="w-[15%]  flex items-center justify-center ">
             <div className="w-3/4  h-3/4 ">
               <img src="https://images.livspace-cdn.com/w:1220/h:264/plain/https://d3gq2merok8n5r.cloudfront.net/bumblebee/common/livspace-new-logo-1651660705-3hLxV.png" className="w-full h-full"></img>
             </div>
           </div>
           <div className="w-[75/%] ">
            <ul className="w-full h-full flex justify-evenly items-center md:text-2xl text-base gap-2">
              <li>Layout</li>
              <li>Measurements</li>
              <li>Package</li>
              <li>Quote</li>
              </ul> 
           </div>
           <div className="w-[10%] flex items-center justify-center md:text-2xl text-base">
              <h1>
                1/4
              </h1>
           </div>
         </div>
        
      <div className="w-full md:w-3/4 h-[77%]  bg-neutral-800  flex flex-col items-center justify-center">
      <div className="w-full h-1/6 text-center flex flex-col items-center mt-5 ">
       <h1 className=" text-3xl">Select the layout of your kitchen  </h1>
       <h1 className=" text-2xl">
       Want to know more. Check here
       </h1>
      </div>
       <div className="w-full h-[77%]  grid grid-cols-2 gap-4 p-5 bg-neutral-800 ">
      
            {cards.map(card => (
             <Card key={card.id} title={card.title} />
            
            ))}

      </div> 
      </div>




      <div className="h-[5%] w-3/4 bg-red-200 rounded-2xl mb-2 px-5 flex justify-between items-center">
          <div className="w-[15%] h-[80%] md:text-lg text:sm ">
            <button className="w-full h-full rounded-xl bg-red-400"> Prev</button>
          </div>
          <div className="w-[15%] h-[80%] bg-yellow-300  md:text-lg text-sm ">
          <button  className="w-full h-full rounded-xl bg-red-400"> Next</button>
          </div>
      </div>


      </div>
     </>
  );
}
