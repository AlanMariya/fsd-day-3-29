import { Button, Typography } from '@mui/material';
import React, { useState } from 'react'

const Counter = () => {
        const [count, setCount] = useState(0)
        
       const increment = () => {
        console.log("add btn clicked")
            setCount(count + 1);
        };
      
        const decrement = () => {
            console.log("subtract btn clicked")
            setCount(count - 1);
        };
  return (
    <div>
             <Typography variant = 'h4'>Count:{count}</Typography><br/>
            <Button variant = 'contained' color='success' onClick={increment}>+</Button>
            <Button variant = 'contained' color='error'onClick={decrement}>-</Button>
    </div>
  )
}

export default Counter