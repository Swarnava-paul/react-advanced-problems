import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [theme,setTheme] = useState('dark')

  function themefunction(lightTheme,darkTheme){
    return (theme=='light'?lightTheme:darkTheme)
  }
  return (
    <>
  <button onClick={()=>{setTheme(theme=="light"?'dark':'light')}}>change Theme</button>
 <h1 className={themefunction('h1-light','h1-dark')} style={{textAlign:'center'}}>
  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil quae neque, error harum vel, odit accusantium reprehenderit vero non cum dolores. Ex, cupiditate! Excepturi eius soluta libero accusamus neque corporis.
  
 </h1>

 <i className="fa-brands fa-slack" id={themefunction('slack-light-theme','slack-dark-theme')} style={{fontSize:'52px'}}></i>
    </>
  )
}

export default App
