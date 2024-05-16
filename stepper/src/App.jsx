import { useState,useContext } from 'react'
import { Flex,Grid,Button,Input} from '@chakra-ui/react'
import './App.css'


// context 
import { component_determine_context } from './context/component-context'
function App() {

  const{component}=useContext(component_determine_context)
  
  return (
    <>
     <Stepper/>
    {
      component.component
    }
    </>
  )
}

export const Details_filling=()=>{

  //context
  
  const{dispatch}=useContext(component_determine_context)

  const[password,setPassword]=useState('password')

  const input_style={
    outline:'none',
    border:"1px solid black",
    width:['80%','70%','40%','30%'],
    height:"7vh",
    borderRadius:"5px"
  }
  return(
    <>
    
    <div style={{display:"grid",placeItems:"center",rowGap:"19px",marginTop:"20px"}}>
    <p style={{textAlign:'center',fontSize:"24px",fontWeight:"700"}}>Details Filling</p>

      <Input type="text" sx={input_style} placeholder='Enter Name'/>
      <Input type="email" sx={input_style} placeholder='Enter Email'/>
      <Flex p={2} width={input_style.width} height={input_style.height} justifyContent="space-evenly" alignItems="center" border="1px solid black" borderRadius="5px">
      <Input variant='unstyled'  placeholder='Enter Password' type={password}  />
      <i onClick={()=>{
        setPassword(password=='password'?'text':'password')
      }} className={password=='password'?"fa-solid fa-eye-slash":'fa-solid fa-eye'}></i>
      </Flex>

     <Button onClick={()=>{

     dispatch({type:'details-filling-coompleted'})

     }} border="none" backgroundColor="black"color="white" width={input_style.width} height="7vh" borderRadius="10px" fontSize='16px'>Next</Button>
     </div>
    </>
  )
}
export const Register_phone=()=>{

  //context
  const{dispatch}=useContext(component_determine_context)


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
    <div style={{display:"grid",placeItems:"center",rowGap:"10px",marginTop:"20px"}}>
    <p style={{textAlign:'center',fontSize:"24px",fontWeight:"700"}}>Register Phone</p>
    <Input type="number" border="1px solid black"outline="none"width={['80%','70%','60%','30%']} height="7vh" placeholder='Enter Mobile Number'/>
    <Flex marginTop="10px" gap="6px" width={['80%','80%','70%','50%']} justifyContent="center">
    <button onClick={()=>{
      dispatch({type:"previous-from-register-phone"})
    }} style={button_style}>Previous</button>
    <button onClick={()=>{

      dispatch({type:"register-phone-completed"})

    }} style={button_style}>Next</button>
    </Flex>
    </div>
    </>
  )
}

export const Payment=()=>{

  //context
  const{dispatch}=useContext(component_determine_context)


  return(
    <>
        <p style={{textAlign:'center',fontSize:"24px",fontWeight:"700",marginTop:"20px"}}>Payment</p>

    <div style={{width:"100%",margin:"auto",display:"flex",justifyContent:"center",marginTop:"10px"}}>

    <Button onClick={()=>{
      dispatch({type:"payment-completed"})
    }} fontSize="16px"borderRadius="5px" height="7vh" border="none" backgroundColor="black" color="white" width={['50%','30%','20%','20%']}>Pay</Button>
    </div>
    </>
  )
}
export const Completed=()=>{

  return(
    <>
    <p style={{textAlign:'center',fontSize:"24px",fontWeight:"700",marginTop:"30px"}}>Thanks For showing your interest</p>
    </>
  )
}

const Stepper=()=>{

  const{component}=useContext(component_determine_context)
  const backgroundColor=component.backgroundColor;

  return(
    <>
    <div style={{display:'grid'}}>

    <Flex  justifyContent="center" alignItems='center' height='10vh' width={['100%','100%','100%','60%']} margin="auto" marginTop={5}>

        <Flex justifyContent="center" alignItems='center' border="1px" borderColor='black' width={['14%','8%','8%','8%']} height="90%" borderRadius="50%" backgroundColor={backgroundColor[0]}>
          {backgroundColor[0]=='green'?(<i style={{fontSize:"28px"}} className="fa-solid fa-check"></i>):<i style={{fontSize:"28px"}} className="fa-solid fa-list-check"></i>}
        </Flex>
        <div style={{border:"1px solid black",width:"28%",height:"1vh"}} className={backgroundColor[0]=='green'?'progress':''}></div>{/** details filling */}



        <Flex justifyContent="center" alignItems='center' border="1px" borderColor='black' width={['14%','8%','8%','8%']} height="90%" borderRadius="50%" backgroundColor={backgroundColor[1]}>
      {backgroundColor[1]=='green'?(<i style={{fontSize:"28px"}} className="fa-solid fa-check"></i>):<i style={{fontSize:'28px'}} className="fa-solid fa-square-phone"></i>}

        </Flex>
        <div style={{border:"1px solid black",width:"28%",height:"1vh"}} className={backgroundColor[1]=='green'?'progress':''}></div>{/**register phone */}



        <Flex justifyContent="center" alignItems='center' border="1px" borderColor='black' width={['14%','8%','8%','8%']} height="90%" borderRadius="50%" backgroundColor={backgroundColor[2]}>
        {backgroundColor[2]=='green'?(<i style={{fontSize:"28px"}} className="fa-solid fa-check"></i>):<i style={{fontSize:"28px"}} className="fa-solid fa-indian-rupee-sign"></i>}

          </Flex>{/**payment */}

    </Flex>

    <Flex width={['97%','80%','80%','51%']} margin="auto" justifyContent="space-between">
      <p>Details filling</p>
      <p>Register phone</p>
      <p>Payment</p>
    </Flex>

    </div>
    </>
  )
}

export default App
