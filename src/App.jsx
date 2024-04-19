import { useState } from 'react'
import './App.css'
import Header from './componets/Header'
import MyCard from './componets/MyCard'
import Dogs from './componets/Dogs'
import Footer from './componets/Footer'

function App() {
  
  const Perritos = Dogs;
  
  return (
    <>
      <Header title="Adopta un Perrito" />
      <div className='cardsDogs'>
        {
        Perritos.map(p=>{
          return(
            <MyCard 
            key={p.id}
            img={p.img} 
            nombre={p.nombre} 
            descripcion={p.descripcion} 
            bg={p.bg} 
            tx={p.tx} />
            )
          })
        }
    </div>
    <Footer />
    </>
  )
}

export default App
