import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const Basics = () => {
    var a = 'Alan'
    var[name,setname]= useState("Mariya")
    // const handleInput = () =>{
    //     console.log("function called")
    // }
    
  const  handleInput = (e) =>{
        console.log(e.target.value)
        setname(e.target.value)
        
    }
    var [val,setval]=  useState()
    const handleInput2 =() =>{
        setval(name)
    }

  return (
    <div>
            <Typography variant="h2"> Hai {a} </Typography><br/>
            {/* <Typography variant="h2"> Hai {name} </Typography><br/> */}
            <Typography variant="h2">Hai {val}</Typography>
            <TextField variant = 'outlined' color='secondary' onChange={handleInput} label='enter name'/><br/><br/>
            <Button onClick={handleInput2} color='secondary'variant='contained'>Insert</Button>


    </div>
  )

}

export default Basics