// import { useState } from 'react'
import './App.css'
import ItemContainer from './components/Items/ItemListContainer.jsx';
import Navbar from './components/Navbar/Navbar.jsx';

function App() {

  return (
    <>
      <Navbar/>
      <ItemContainer greeting={'¡Bienvenidos a Midier!'}/>

    </>
  )
}

export default App
