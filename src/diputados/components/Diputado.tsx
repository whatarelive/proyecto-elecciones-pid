import { useState } from "react";
import Imagen from "../../assets/svg/person.svg";

interface Props {
  nombre: string;
  imagen: string;
  age: string;
  provincia: string;
  municipio: string;
  cargo: string;
  biografia: string;
}

export const Diputado = ( { diputado}: { diputado:Props} ) => {

  const { nombre, age, cargo, biografia } = diputado;

  const [viewBio, setviewBio] = useState(false);
 
  const BioInfo = () => (
    <div className='my-4'>
      <h5 className='font-bold mb-3'>Biografía</h5>
      <p className='px-1'>{ biografia }</p>  
    </div>
  )

  return (
    <article 
      className='flex flex-col px-4 py-4 hover:bg-slate-100 hover:cursor-pointer'
      onClick={() => setviewBio( !viewBio )}
    >
      <div className='flex flex-1 items-center'>
        
        <div className='flex w-1/3 items-center'>
          <div className='p-2 mx-2 bg-gray-100 rounded-full'>
            <img className='w-9' src={ Imagen } alt={`Imagen del diputado ${name}`}/>
          </div>
          <h5>{ nombre }</h5>
        </div>

        <p className='flex px-4 w-1/3'>{ age }</p>
        
        <p className='flex w-1/3'>{ cargo }</p>
      </div>
      { 
        viewBio && <BioInfo/> 
      }
    </article>
  )
}
