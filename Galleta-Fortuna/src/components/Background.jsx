import {useState,useEffect, Component} from 'react';
import  React from 'react';
import imagenes from '../assets/imagenes';


const Background = () =>{

    let index = []
    index[0] = imagenes.img1
    index[1] = imagenes.img2
    index[2] = imagenes.img3
    index[3] = imagenes.img4
    index[4] = imagenes.img5
    index[5] = imagenes.img6
    index[6] = imagenes.img7
    index[7] = imagenes.img8

    const randomId = Math.floor (Math.random() * 14)



    return(
        <div style={{ backgroundImage: `url(${index[3]})` }}>
            <h1 className='Fondo'><p>.<br></br>.
            .<br></br>........<br></br>.</p></h1>
        </div> 
        
    );

    
};








export default Background;