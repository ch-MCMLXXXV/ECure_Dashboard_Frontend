import React from 'react';
import Link from 'next/link';

const TopCards = () => {
   return (
      <div className='grid gap-4 p-4 lg:grid-cols-5'>
         <div className='flex justify-between w-full col-span-1 p-4 bg-white border rounded-lg lg:col-span-2'>
            <div className='flex flex-col w-1/2 pb-4 '>
               <p>Name of Link</p>
            </div>
            <Link href='/'>
               <button className='p-1 text-white bg-blue-700 rounded-lg '>
                  Click Here
               </button>
            </Link>
         </div>
         <div className='flex justify-between w-full col-span-1 p-4 bg-white border rounded-lg lg:col-span-2'>
            <div className='flex flex-col w-1/2 pb-4 '>
               <p>Name of Link</p>
            </div>
            <Link href='/'>
               <button className='p-1 text-white bg-blue-700 rounded-lg'>
                  Click Here
               </button>
            </Link>
         </div>
         <div className='flex justify-between w-full p-4 bg-white border rounded-lg '>
            <div className='flex flex-col w-1/2 pb-4 '>
               <p>Name of Link</p>
            </div>
            <Link href='/'>
               <button className='p-1 text-white bg-blue-700 rounded-lg'>
                  Click Here
               </button>
            </Link>
         </div>
      </div>
   );
};

export default TopCards;
