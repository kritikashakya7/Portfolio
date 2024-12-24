import { useState } from 'react'
import { Facebook, Instagram, Linkedin, Github, Mail, Phone } from "lucide-react";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <><div className='Container'>
      <div className='about'>
        About Me
      </div>
      <p className="text-justify"> Hi I am KRITIKA SHAKYA, pursuing my bachelors degree in computer information system (BCIS).
         As I am a student from IT background I would like to work in
          technical field as well where I can develop myself and learn from the organization.
          I'm eager to apply my skills and passion to projects and work in the tech industry.
                  </p>
      
        <div className='projects'>
        Projects
        <li className='text1'>
        <a 
  href="https://github.com/kritikashakya7/Notepad" 
  target="_blank" 
  rel="noopener noreferrer" 
  style={{ color: "#AF1740" }}
>
  Notepad
</a>


</li>
<li className='text1'>
  <a href="https://github.com/kritikashakya7/Calculator" target="_blank" rel="noopener noreferrer" style={{ color: "#AF1740" }}>
    Calculator
  </a>
</li>
<li className='text1'>
  <a href="https://github.com/kritikashakya7/3DotsDecor" target="_blank" rel="noopener noreferrer" style={{ color: "#AF1740" }}>
    3DotsDecor
  </a>
</li>


      </div>
      <div className='exp'>
       Work Experiences
      
          <li className='text3'>Imperial World School: Teacher's evaluation Workshop</li>
        
       
          <li className='text3'> Grooming Tales: Data Entry</li>
          <li className='text3'> Verisk Nepal: Reactjs and QA intern</li>
         <li className='text3'> Apex Sports Club: Content Writer and Asst. media manager</li>
         <li className='text3'>Apex College: Mentor in Apex Horizon  </li>
      </div>
      <div className='contact'>
        Contact Info
        <ul>
          <a href="https://www.facebook.com/kritkaaaa" target="_blank">
            <Facebook color="#1230AE" className="fb" />
          </a>
          <a href="https://www.instagram.com" target="_blank">
            <Instagram color="#794C74" className="ig" />
          </a>
          <a href="https://www.linkden.com" target="_blank">
            <Linkedin className="ld" />
          </a>
          <a href="https://www.github.com" target="_blank">
            <Github color="#EEEDED" className="gh" />
          </a>
          <ul className='text'> <Mail color="#b81414" className='m' /> kritikashk@gmail.com
          </ul>

          <ul className='text'><Phone color="#b81414" className='ph' /> 9841156571 </ul>
        </ul>

        
      </div>

      </div>
    
    <div className='container2'>
        <div className='edu'>
          Education
          <li className='text1'>Gyanodaya Bal Batika School, Khokana Lalitpur (2010-2017)</li>
          <li className='text1'>United Academy, Kumaripati Lalitpur (2018-2019)</li>
          <li className='text1'>Apex College Mid-Baneshwor Kathmandu (2020-Present)</li>
        </div>

        <div className='softskill'>
          Soft Skills
          <li className='text1'>Teamwork  </li>
          <li className='text1'>Communication  </li>
          <li className='text1'>Time Management </li>
          <li className='text1'>Critical Thinking </li>
        
        </div>

        <div className='edu'>
        Technical Skills
          <li className='text1'>HTML CSS JS</li>
          <li className='text1'>Reactjs </li>
          <li className='text1'>Figma </li>
          <li className='text1'>Canva </li>
          
        </div>

        <div className='softskill'>
          Interests
          <li className='text1'>Frontend development </li>
          <li className='text1'>UI/UX </li>
          <li className='text1'>Content Writing </li>
        </div>

        <div className='edu'>
        Language
          <li className='text1'>English</li>
          <li className='text1'>Nepali </li>
          <li className='text1'>Newari</li>
        </div>


      </div></>

  )
}

export default App
