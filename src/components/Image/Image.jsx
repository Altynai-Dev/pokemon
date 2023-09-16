import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Image = ({url}) => {
    const [image, setImage]= useState('');
    useEffect(()=>{
        axios.get(url).then(res=>{
            setImage(res.data.sprites.front_default)
        })
    })
  return (
    <>
        <img src={image} alt="pokemon" />
    </>
  )
}

export default Image;