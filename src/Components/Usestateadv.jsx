import React, { useState } from 'react'

function Usestateadv() {
    const [a,b] = useState({Name:"Harsh", isBanned: false});
  return (
    <div className='px-4 py-4 flex items-center justify-center w-screen h-screen flex-col'>
        <h1 className='text-10xl font-semibold color text-black'>Name : {a.Name}</h1>
        <h1 className='text-8xl font-semibold color text-black'>Is Banned : {a.isBanned.toString()}</h1>
        <button onClick={()=>b({...a, isBanned: !a.isBanned})} className={`${a.isBanned? "bg-blue-500": "bg-red-500"} text-white mt-3`}>Change Ban Status</button>
        {/* <button onClick={()=> b({...a, isBanned: !a.isBanned})} className='bg-blue-500 text-white mt-3'>Change Ban Status</button> */}
    </div>
  )
}

export default Usestateadv