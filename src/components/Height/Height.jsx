import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Height = ({height}) => {
    let [pokeHeight, setHeight] = useState('');
    useEffect(()=>{
        axios.get(height).then(res=>{
            setHeight(res.data.height)
        })
    },[])
  return (
    <>{pokeHeight}</>
  )
}

export default Height