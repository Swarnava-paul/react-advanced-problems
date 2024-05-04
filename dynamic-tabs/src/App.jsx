import { useState } from 'react'

import './App.css'

function App() {
  const [tab,setTab] = useState('home')

  const btn={
    bg:'black',
    h:"6vh",
    w:'20%',
    c:'white'

  }
  return (
    <>
    <div style={{display:'flex',justifyContent:"space-between",width:'30%',margin:'auto',marginTop:"20px"}}>
     <button style={{height:btn.h,width:btn.w,backgroundColor:btn.bg,color:btn.c}} onClick={()=>{setTab('home')}}>Home</button>
     <button style={{height:btn.h,width:btn.w,backgroundColor:btn.bg,color:btn.c}} onClick={()=>{setTab('about')}}>About</button>
     <button style={{height:btn.h,width:btn.w,backgroundColor:btn.bg,color:btn.c}}onClick={()=>{setTab('contact')}}>Contact</button>
     </div>
     <Tabs tab={tab}/>
    </>
  )
}

const Tabs =({tab})=>{

  return(
    <>
      <div style={{marginTop:"20px",width:"40%",margin:'auto',textAlign:'center'}}>
        {
          (tab=='home'?(<h1>Home</h1> ):tab=='about'?(<h1>About</h1>):(<h1>Contact</h1>))
        }
      </div>
    </>
  )
}

export default App
