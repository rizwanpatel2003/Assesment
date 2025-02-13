   "use client"
   
   import { useState } from 'react';

const Card = ({ title, content }) => {

   
    return (
          <div className=" flex flex-col bg-black rounded-lg shadow-sm shadow-white
           hover:shadow-lg hover:shadow-white hover:translate-y-[-2px]">   
           <div className="w-full h-5/6 bg-[url(https://d3gq2merok8n5r.cloudfront.net/stage2-1623054096-6N9Ti/kitchen-price-calculator-1623054114-0nQu5/layout-of-kitchen-1623054142-c9zFe/l-shaped-d-1623057547-t6bt7.png)] bg-cover rounded-t-lg "  >
               
               </div>
            <div className="w-full h-1/5 text-center">
                <h1 className=" text-xl md:text-2xl">{title}</h1>
               
            </div>

      </div>
    
    );
  };
  
  export default Card;