import React, { useEffect, useState } from 'react';
import "./App.css"
import axios from 'axios';
import Image from './components/Image/Image';
import Divider from '@mui/joy/Divider';
import Navbar from './components/Navbar/Navbar';
import Height from './components/Height/Height';
import Weight from './components/Weight/Weight';

const App = () => {
  let [pokemons, setPokemons] = useState([]);
  useEffect(()=>{
    axios.get('https://pokeapi.co/api/v2/pokemon/').then(res=>{
      setPokemons(res?.data.results);
    })
  },[]);
  return (
    <div className='app'>
      <Navbar />
      <Divider></Divider>
      <div className='items'>
      {pokemons.map((item, index)=>(
        <div key={index} className='item'>
        <Image url={item.url} />
        <h3>{item.name}</h3>
        <div>
          <p>Hieght: <Height height={item.url} /> </p>
          <p>Weight: <Weight weight={item.url} /></p>
        </div>
        </div>
      ))}
      </div>
    </div>
  )
}

export default App