import './App.css'
import UserCard from './components/UserCard'
import Phrase from './data/phrases.json'
import { useState } from 'react'
import imagenes from './assets/imagenes'
import style from"styled-components";
//import Background from './components/Background'


function App() {

  let [ index, setIndex ] = useState(0)

  let image = []
    image[0] = imagenes.img1
    image[1] = imagenes.img2
    image[2] = imagenes.img3
    image[3] = imagenes.img4
    image[4] = imagenes.img5
    image[5] = imagenes.img6
    image[6] = imagenes.img7
    image[7] = imagenes.img8

  
const randomId = Math.floor (Math.random() * 14)

const randomBack = Math.floor (Math.random() * 7)
console.log("El nuevo random es:")
console.log(randomBack)

const changeIndex = () => {
  setIndex (index = randomId)
}

const Contenedor = style.div`
display: flex;
justify-content: center;
height: 830px;
`;

const Contenedor1 = style.div`
display: flex;
justify-content: center;
align-content: center;
padding: 210px;
margin-top: px;

`;
  
  return (
    <>
    <Contenedor>
    <div className='back' style={{ width: `1850px` , backgroundImage: `url(${image[randomBack]})` }}>
            <h1 className='Fondo'></h1>
            <Contenedor1>
            <UserCard
              data = { Phrase[index] }
            />
            </Contenedor1>
            <button
              onClick={() => changeIndex() }
            >Nueva Fortuna
            </button>
          data1 = { index }
        </div> 
    </Contenedor>
    


    
   
      
      
    </>
    
  )
}

export default App
