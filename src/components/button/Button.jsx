import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

function Button({title,caller}) {
  
  let navigate = useNavigate()
  return ( 
    <button  onClick ={caller} style={
      
      {
        
        backgroundColor : "#27296d",
        color: "white",
        padding: "10px 40px",
    borderRadius : "30px",
    border: "none"
    
    
  }
  
  
  }>{title}</button>
  )
}

export default Button