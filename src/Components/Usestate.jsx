import React, { useState } from 'react'

function Usestate() {
    const [a,b] = useState(5);
  return (
    <div className='px-4 py-4 flex items-center justify-center w-screen h-screen flex-col'>
        <h1 className='text-10xl font-semibold color text-black'>{a}</h1>
        <button onClick={()=> b(prev=>prev+1)} className='bg-blue-500 text-white mt-3'>Change Value</button>
    </div>
  )
}

export default Usestate