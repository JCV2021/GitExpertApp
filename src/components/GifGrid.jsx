

import React, { useEffect,useState  } from 'react'
//import { getGifs } from '../helpers/getGifs';
import { GifItem } from './GifItem';
import { useFerchGifs } from '../hooks/useFerchGifs';





export const GifGrid = ({category}) => {

  const {images ,isLoading} = useFerchGifs(category)

 

   
            


  return (
    <>
        <h3>{category}</h3>
            {
               isLoading && (<h2>Cargando...</h2> )  
               


            }


        

        <div className='card-grid'>
        {
          images.map((image) =>(
             <GifItem 
             key ={image.id}
             {...image}
            


             />

          ))
        }


         
        </div>
 
        

    </>
  )
}
