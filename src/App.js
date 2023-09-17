import React, { useEffect, useState } from 'react'
// Import React-Router-Dom
import { BrowserRouter,Routes,Route,Link,NavLink } from 'react-router-dom'
import ScaleLoader  from 'react-spinners/ScaleLoader'
// import css file
import './App.css'
// componants
import Home from './Home'
import Project from './Project'

const App= () =>{
  const [Loading,setLoading]=useState(false);
  useEffect(()=>{
    setLoading(true);
        setTimeout(()=>{
          setLoading(false)
        },3000);
  },[])
  return(
    <BrowserRouter>
    {
      Loading ?
      <div className='preloader'>
        <ScaleLoader color="#e87060" cssOverride={{}} height={80} margin={5} radius={5} speedMultiplier={1} width={4}/>
      </div> :
        <Routes>
            <Route  path="/" element={<Home/>}></Route>
            <Route  path="/Project" element={<Project/>}></Route>
        </Routes>
    }
    </BrowserRouter>
  )
}

export default App