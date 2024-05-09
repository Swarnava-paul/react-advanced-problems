import { useState } from 'react'

import './App.css'

function App() {
 
  const[stepper,setStepper]=useState('details-filling')
  const[backgroundColor,setBackgroundColor]=useState([])
  return (
    <>
    <Stepper backgroundColor={backgroundColor}/>
    {
      ( stepper=='details-filling'?(<Details_filling setStepper={setStepper} backgroundColor={backgroundColor} setBackgroundColor={setBackgroundColor}/>):
      stepper=='register-phone'?(<Register_phone setStepper={setStepper} backgroundColor={backgroundColor} setBackgroundColor={setBackgroundColor}/>):
      stepper=='payment'?(<Payment setStepper={setStepper} backgroundColor={backgroundColor} setBackgroundColor={setBackgroundColor}/>):(<Completed  setStepper={setStepper}/>)
      )
    }
    </>
  )
}

const Details_filling=({setStepper,backgroundColor,setBackgroundColor})=>{
  const[password,setPassword]=useState('password')

  const input_style={
    outline:'none',
    border:"1px solid black",
    width:"30%",
    height:"7vh",
    borderRadius:"5px"
  }
  return(
    <>
    <h1 style={{textAlign:'center'}}>Details Filling</h1>
    <div style={{display:"grid",placeItems:"center",rowGap:"19px"}}>

      <input type="text" style={input_style} placeholder='Enter Name'/>
      <input type="email" style={input_style} placeholder='Enter Email'/>
      <div style={{width:"30%",display:"flex",justifyContent:"space-evenly",alignItems:"center",border:"1px solid black",borderRadius:"5px"}}>
      <input placeholder='Enter Password' type={password} style={{width:"90%",outline:"none",height:"7vh",border:"none",backgroundColor:"white"}} />
      <i onClick={()=>{
        setPassword(password=='password'?'text':'password')
      }} className={password=='password'?"fa-solid fa-eye-slash":'fa-solid fa-eye'}></i>
      </div>

     <button onClick={()=>{
      setStepper('register-phone')
      let ar=[...backgroundColor]
      ar.push('green');
      setBackgroundColor(ar)
     }} style={{border:"none",backgroundColor:"black",color:"white",width:"10%",height:"7vh",borderRadius:"10px",fontSize:'16px'}}>Next</button>
     </div>
    </>
  )
}
const Register_phone=({setStepper,backgroundColor,setBackgroundColor})=>{

  const button_style={
    backgroundColor:"black",
    color:"white",
    borderRadius:"5px",
    border:"none",
    height:"7vh",
    width:"30%",
    fontSize:"16px"

  }
  return(
    <>
    <div style={{display:"grid",placeItems:"center",rowGap:"10px"}}>
    <h1 style={{textAlign:'center'}}>Register phone</h1>
    <input type="number" style={{outline:"none",width:"30%",height:"7vh"}} placeholder='Enter Mobile Number'/>
    <div style={{display:'flex',marginTop:"10px",gap:"6px",width:"40%",justifyContent:"center"}}>
    <button onClick={()=>{
      setStepper('details-filling')
      let ar=[...backgroundColor];
      ar.pop()
      setBackgroundColor(ar)
    }} style={button_style}>Previous</button>
    <button onClick={()=>{
     setStepper('payment')
     let ar=[...backgroundColor]
     ar.push('green');
     setBackgroundColor(ar)
    }} style={button_style}>Next</button>
    </div>
    </div>
    </>
  )
}

const Payment=({setStepper,backgroundColor,setBackgroundColor})=>{

  return(
    <>
    <h1 style={{textAlign:"center"}}>Payment</h1>
    <div style={{width:"100%",margin:"auto",display:"flex",justifyContent:"center",marginTop:"10px"}}>
    <button onClick={()=>{
      setStepper('completed')
      let ar=[...backgroundColor]
      ar.push('green')
      setBackgroundColor(ar)
    }} style={{fontSize:"16px",borderRadius:"5px",height:"7vh",border:"none",backgroundColor:"black",color:"white",width:"10%"}}>Pay</button>
    </div>
    </>
  )
}
const Completed=()=>{

  return(
    <>
    <h1 style={{textAlign:"center",marginTop:"10%"}}>Thanks For showing your interest </h1>
    </>
  )
}

const Stepper=({backgroundColor})=>{


  return(
    <>
    <div style={{display:'grid'}}>

    <div style={{justifyContent:"center",alignItems:'center',height:'10vh',width:"60%",margin:"auto",marginTop:"1%",display:'flex'}}>

        <div style={{display:"flex",justifyContent:"center",alignItems:'center',border:"1px solid black",width:"8%",height:"100%",borderRadius:"50%",backgroundColor:backgroundColor[0]}}>
          {backgroundColor[0]=='green'?(<i style={{fontSize:"28px"}} className="fa-solid fa-check"></i>):<i style={{fontSize:"28px"}} className="fa-solid fa-list-check"></i>}
        </div>
        <div style={{border:"1px solid black",width:"28%",height:"1vh"}} className={backgroundColor[0]=='green'?'progress':''}></div>{/** details filling */}



        <div style={{display:"flex",justifyContent:"center",alignItems:'center',border:"1px solid black",width:"8%",height:"100%",borderRadius:"50%",backgroundColor:backgroundColor[1]
        }}>
      {backgroundColor[1]=='green'?(<i style={{fontSize:"28px"}} className="fa-solid fa-check"></i>):<i style={{fontSize:'28px'}} className="fa-solid fa-square-phone"></i>}

        </div>
        <div style={{border:"1px solid black",width:"28%",height:"1vh"}} className={backgroundColor[1]=='green'?'progress':''}></div>{/**register phone */}



        <div style={{display:"flex",justifyContent:"center",alignItems:'center',border:"1px solid black",width:"8%",height:"100%",borderRadius:"50%",backgroundColor:backgroundColor[2]}}>
        {backgroundColor[2]=='green'?(<i style={{fontSize:"28px"}} className="fa-solid fa-check"></i>):<i style={{fontSize:"28px"}} className="fa-solid fa-indian-rupee-sign"></i>}

          </div>{/**payment */}

    </div>

    <div style={{width:"51%",margin:"auto",display:"flex",justifyContent:"space-between",marginTop:"-1%"}}>
      <p>Details filling</p>
      <p>Register phone</p>
      <p>Payment</p>
    </div>

    </div>
    </>
  )
}

export default App
