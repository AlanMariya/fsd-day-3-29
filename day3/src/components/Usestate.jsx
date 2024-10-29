import { Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

const Usestate = () => {
    var[val,setval]= useState()
   
    
    const react = () =>{
        var val ='React'
        console.log("React is clicked")
        setval(val)  //setval("React")
    }
    const angular = () =>{
        var val ='Angular'
        console.log("Angular is clicked")
        setval(val) //setval("angular")
    }
    const button = () =>{
        var val='Java Script' 
        console.log("Java Script is clicked")
        setval(val) //setval("javasript")
    }
    //use effect
    useEffect ( () => {
        angular()
    },[])
  return (
    <div>
        <Typography variant='h2'>Welcome To :{val}</Typography>
        <Button onClick={react} variant='contained' color='secondary'>React</Button>
        <Button onClick={angular} variant='outline' color='warning'>Angular</Button>
        <Button onClick={button} variant='filled' color='error'>Java Script</Button>
    </div>
  )
}

export default Usestate