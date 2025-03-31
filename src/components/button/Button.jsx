import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

function Button({ title, caller, links }) {

  let navigate = useNavigate()
  return (
    <Link to={links}>
    <button onClick={caller} style={

      {

        backgroundColor: "#27296d",
        color: "white",
        padding: "10px 40px",
        borderRadius: "30px",
        border: "none"


      }


    }>{title}</button>
    </Link>
  )
}

export default Button