import React, { useState } from 'react'

function Usestatemaster() {
    const [a,b] = useState ([1,2,3,4,5,6,7,8] );
  return (
    <div className='flex w-screen h-screen bg-blue-100 flex-col items-center justify-center '>
         {
            a.map( (a)=>
                <h1>{a}</h1>
            )
         }

<button onClick={()=> b(()=> a.filter((item, index) => index != a.length -1))} className='bg-blue-500 text-white mt-3'>Remove Last Number</button>
    </div>
  )
}

export default Usestatemaster