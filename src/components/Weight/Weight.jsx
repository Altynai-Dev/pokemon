import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Weight = ({weight}) => {
    let [pokeWeight, setWeight] = useState('');
    useEffect(()=>{
        axios.get(weight).then(res=>{
            setWeight(res.data.weight)
        })
    }, [])
  return (
    <>{pokeWeight}</>
  )
}

export default Weight