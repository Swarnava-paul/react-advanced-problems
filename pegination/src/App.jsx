import { useState,useEffect } from 'react'

import './App.css'
import { SliderFilledTrack } from '@chakra-ui/react'

function App() {
  const[mainDataHolder,setMainDataHolder]=useState([])
  const [postPerPage, setpostPerPage] = useState(10)
  const[currentPage,setcurrentPage]=useState(1)
  const[posts,setPosts]=useState([])
  const[buttons,setButtons]=useState([])


  useEffect(()=>{
    console.log('effect 1');
  async function fetchData(){
    try{
      let data= await fetch('https://electronic-product-data.onrender.com/data');
      let finalData= await data.json()
      setPosts(finalData)
      setMainDataHolder(finalData)
      //console.log(finalData.length);
     let btnCount=(finalData.length/10).toFixed(0)-1
     let buttonsCountArray= Array.from({ length:btnCount }, (v, i) => i + 1);
     setButtons(buttonsCountArray)

    }catch(err){
      console.log(err);
    }
  }
 
  fetchData()
  },[])

useEffect(()=>{
handlePegianton(currentPage)
},[mainDataHolder])

const handlePegianton=(item)=>{
  let maximum=(item * postPerPage)-1;
  let minimum= maximum-9;
  let posts=[...mainDataHolder]
let filtered= posts.filter(function(item,index){
 if(index>=minimum && index<=maximum){
  return item;
 }
})

setPosts(filtered)

}

return(
  <>
  <h1>Pagination</h1>
  <div className="contentholder">
  {
    posts.map((i,index)=>(
      <li key={index}>{i.name}</li>
    ))
  }
  </div>
  <div style={{display:'flex',gap:"9px"}}>
    {
      buttons.map((item,index)=>(
        <button disabled={item==currentPage} key={index} onClick={()=>{
          setcurrentPage(item)
         handlePegianton(item)
        }}>{item}</button>
      ))
    }
  </div>
</>
)
}



export default App
