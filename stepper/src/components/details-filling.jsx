import { useState,useContext } from "react"
// context
import { component_determine_context } from "../context/component-context"

import { Input,Flex,Button } from "@chakra-ui/react"

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