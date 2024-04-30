import { useState } from 'react'

import './App.css'

function App() {
  const [password,setPassword] = useState('password')
  //<i class="fa-solid fa-eye-slash"></i>
  // <i class="fa-solid fa-eye"></i>

  return (
    <>
     <div style={{marginTop:"20%",border:'1px solid black',width:"40%",disply:'flex',gap:'5px',margin:'auto',alignItems:'center'}}>
       <input type={password} style={{fontSize:'19px',border:'none',outline:"none",width:'90%',height:'7vh'}} placeholder='Enter password'/>
        <i className={password=='password'?'fa-solid fa-eye-slash':'fa-solid fa-eye'}
        onClick={()=>{
          setPassword(password=='password'?'text':'password')
        }}></i>
     </div>
    </>
  )
}

export default App
