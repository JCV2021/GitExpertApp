import { useState } from "react"
import { AddCategory } from "./components/AddCategory";


export const GifExpertApp = () => {

  const [categories, setCategories] = useState([ 'One Punch','Dragon Ball','jc']);
  const onAddCategory = () => {
       // categories.push('7seven');
       setCategories(['7seven',...categories,]);
      // setCategories(cat =>[...cat,'7seven']);


     
  }

  return (
    <>

        {/* title */}
      <h1>GifExpertApp</h1>

       {/* Input */}

      <AddCategory  setCategories={setCategories} />

       {/* Lista de Gif */}
      

      
              {
                
                categories.map (category =>{
                    return <li key={category}> {category} </li>

                })
              
              
              }
             {/*  <li>ABC</li> */}

        
      </ol>


    </>
    )
}
