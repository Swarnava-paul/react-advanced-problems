import { useState,useEffect } from 'react'

import './App.css'

function App() {
  const [data,setData] = useState('');
  const[filter,setFilter]=useState([])
  const[v,setV]=useState(0)
  let btnTxt=["men's clothing",'jewelery','electronics',"women's clothing"];
  
  async function fetchData(){
    try{
     await fetch('https://fakestoreapi.com/products')
     .then(async(data)=>{
       await data.json()
       .then((data)=>{
        setData(data)
       })
     })
    }catch(error){
      console.log(error);
    }
  }
  useEffect(()=>{
   fetchData()
  },[])
  return (
    <>
    <div style={{marginTop:"20px",width:"40%",display:'flex',margin:'auto',justifyContent:'space-evenly'}}>
    {
      btnTxt.map((item,index)=>(
       <Button key={index} item={item} index={index} filter={filter} setFilter={setFilter}/>
      ))
     
    }
    </div>

    <div style={{display:"grid",gridTemplateColumns:'repeat(3,24%)',justifyContent:'center',marginTop:"20px",gap:"9px"}}>
      <Ui productdata={data} filter={filter}/>
    </div>
    <button onClick={()=>{setV(v+1)}}>clicked {v} times</button>
    </>

  )
}
const Ui=({productdata,filter})=>{

const[array,setArray]=useState([])

useEffect(()=>{
  let newArray=[];
  let filtered=filter.map(i=>(
    productdata.filter(item=>(
     i==item.category
    ))
)).map(i=>(
 i.forEach(element => {
    
    newArray.push(element)

 })
))
setArray(newArray)
},[filter],[productdata])


return(
  <>

{
 array.map((item,index)=>(
  <div key={index} style={{height:'auto',display:"grid",border:"1px solid black",placeItems:"center"}}>
    <p>{item.title}</p>
    <p>{item.category}</p>
    <p>{item.price}</p>
  </div>
 ))
}

  </>
)

}

const Button=({item,index,filter,setFilter})=>{

  const[btnColor,setBtnColor]=useState('white')


  return(
    <>
         <button style={{border:'1px solid black',color:btnColor=='white'?'black':'white',height:"7vh",backgroundColor:btnColor,borderRadius:"5px"}} key={index}
         onClick={()=>{
          setBtnColor(btnColor=='white'?'black':'white')
          let check=filter.indexOf(item)
           if(check==-1){
            let ar=[...filter]
            ar.push(item)
            setFilter(ar)
           }else{
            let ar=[...filter];
           let filtered =ar.filter(i=>(
              i!==item
            ))
          setFilter(filtered)
           }
        }}>{item}</button>
    </>
  )
}
export default App
