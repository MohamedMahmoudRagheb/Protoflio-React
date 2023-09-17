import React,{useState,useEffect} from 'react'
import NavBar from './NavBar'
import "./Project.css"
import axios from 'axios'
const Project = () => {
  const [Project,setProject] = useState([]);
  
  useEffect(() => {
    axios.get("Data.json")
      .then((res) => 
        setProject(res.data.Projects)
      )
    }, [])
  return (
    <div>
      <NavBar/>
      <section>
          <div className='titlePage'>
            <h1>All Project</h1>
          </div>
          <div className='parent'>
                    {
                      Project.map((projects)=>(
                <div className='prject wow fadeInUp' >
                    <div className='image'>
                      <img src={projects.photo} alt="#" />
                    </div>
                    <div className='data'>
                        <h2>{projects.title}</h2>
                        <p>{projects.discription} </p>
                        <a href={projects.link}>View</a>
                    </div>
                </div>
                      ))
                    }
          </div>
        </section>
    </div>
  )
}

export default Project
