import React from 'react'

function Card() {
  
  const data = [
    
    {image:'https://plus.unsplash.com/premium_photo-1665990294372-a9720725afaa?q=80&w=2045&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', name:"Ganja", description:"Yeh tumhari gaand mar dega behat khatarnak he bach ke raho", Instock:true},
  {image:'https://images.unsplash.com/photo-1698672609805-6b92b9ba607b?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', name:"Charas", description:"Bhai yeh kabhi kiya nai he aur karne me interest bhi nai he", Instock:false},
  {image:'https://images.unsplash.com/photo-1583900985737-6d0495555783?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', name:"Randi ki Gand", description:"Sabse ghatak nasha he is nashe se koi mard nai bach paya he", Instock:true}

];
  return (
    <div className='w-screen h-screen bg-zinc-200 flex items-center justify-center gap-10'>
{data.map((elem, index) => (
   <div key={index} className='w-52 bg-zinc-100 rounded-md overflow-hidden border-black border'>
   <div className='w-full h-32 bg-zinc-300'>
     <img className='w-full h-full object-cover' src={elem.image} alt="" />
   </div>
   <div className='w-full px-3 py-4 bg-white'>
   <h2 className='font-semibold'>{elem.name}</h2>
   <p className='text-xs mt-2'>{elem.description}</p>
   <button className= {`px-4 py1 rounded text-xs ${elem.Instock ?  'bg-blue-600': 'bg-red-800'} text-zinc-200 mt-3`}>{elem.Instock? "In Stock" : "Out Of Stock"}</button>
   
   </div>
   </div>
)
)}

</div>
  )
}

export default Card