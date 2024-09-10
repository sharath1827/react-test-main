import React from 'react'

function Songs() {

    const data = [
    
        {name:"Ganja", description:"Yeh tumhari gaand mar dega behat khatarnak he bach ke raho", Instock:true},
      {name:"Charas", description:"Bhai yeh kabhi kiya nai he aur karne me interest bhi nai he", Instock:false},
      {name:"Randi ki Gand", description:"Sabse ghatak nasha he is nashe se koi mard nai bach paya he", Instock:true}
    
    ];

  return (
    <div className='w-screen h-screen bg-zinc-200 flex flex-col gap-10 items-center justify-center'>
       {data.map((elem, index) => (

              <div className='px-5 py-4 bg-green-300 rounded'>
              <h3 className='font-semibold text-xl'>{elem.name}</h3>
              <p>{elem.description}
              </p>
              <button onClick={()=> {alert("AAAhhh")}} className='px-2 py-1 rounded mt-3'>Download Now</button>
          </div>

       )
       
        )}
      
    </div>
  )
}

export default Songs