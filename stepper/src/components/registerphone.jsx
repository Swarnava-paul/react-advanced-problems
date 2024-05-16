import { useState,useContext } from "react"

import { Flex,Input,Button } from "@chakra-ui/react"

//context
import { component_determine_context } from "../context/component-context"

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