import React from 'react'
import Card from './Components/Card'
import Songs from './Components/Songs'
import Usestate from './Components/Usestate'
import Usestateadv from './Components/Usestateadv'
import Usestatemaster from './Components/Usestatemaster'
import Props from './Components/props'

function App() {
  const data = [
    {image:'https://plus.unsplash.com/premium_photo-1665990294372-a9720725afaa?q=80&w=2045&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', name:"Ganja", description:"Yeh tumhari gaand mar dega behat khatarnak he bach ke raho", Instock:true},
    {image:'https://images.unsplash.com/photo-1698672609805-6b92b9ba607b?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', name:"Charas", description:"Bhai yeh kabhi kiya nai he aur karne me interest bhi nai he", Instock:false},
    {image:'https://images.unsplash.com/photo-1583900985737-6d0495555783?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', name:"Randi ki Gand", description:"Sabse ghatak nasha he is nashe se koi mard nai bach paya he", Instock:true}
  ];
  return (
    <>
  <div className='w-screen h-screen bg-zinc-400 flex gap-4 items-center justify-center'>
  <Props></Props>
  </div>
    
      {/* <Usestateadv></Usestateadv> */}
      {/* <Usestate></Usestate> */}
      {/* <Songs></Songs> */}
      {/* <Card></Card> */}
      </>
      
  )
}

export default App