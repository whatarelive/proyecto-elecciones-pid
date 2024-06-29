// -------------------- React -------------------
import { useEffect } from "react";
// -------------------- Redux -------------------
import { disbleView, enableView } from "../../redux";
// ----------------- Custom-Hook ----------------
import { useDiputado } from "../hooks";
// --------------------- SVG --------------------
import Imagen from "../../assets/svg/person.svg";


// Props del Componente Diputado
interface Props {
  id: number,
  nombre: string;
  imagen: string;
  age: string;
  cargo: string;
  biografia: string;
}

// Componente auxiliar para mostrar la biografia del diputado.
const BioInfo = ({ bio }: { bio: string }) => (
  <div className='my-4'>
    <h5 className='font-bold mb-3 mx-2'>Biografía</h5>
    <p className='px-2'>{ bio }</p>  
  </div>
)

// Componente principal de la informacion del Diputado.
export const Diputado = ({ diputados }: { diputados: Props } ) => {
  
  // Desestruturacion de la props del componente.
  const { id, nombre, age, cargo, biografia } = diputados;

  const {dispatch, view, idKey} = useDiputado();

  const viewBiografy = view && idKey === id;

  const handledClick = () => dispatch(enableView({idKey: id}));

  // Reinicia la visualizacion de la biografia del diputado.
  useEffect(() => {
    dispatch(disbleView());
  }, []);

  return (
    <>    
      <article 
        className={`flex flex-col px-4 py-4 hover:bg-slate-100 hover:cursor-pointer ${ viewBiografy ? 'bg-gray-100' : ''}`}
        onClick={ handledClick }
      >
        <div className='flex flex-1 items-center'>
          <div className='flex w-1/3 items-center'>
            <div className='p-2 mx-2 bg-gray-200 rounded-full'>
              <img className={ (!viewBiografy) ? 'w-9': 'w-12' } src={ Imagen } alt={`Imagen del diputado ${name}`}/>
            </div>
            <h5>{ nombre }</h5>
          </div>
          <p className='flex px-4 w-1/3'>{ age }</p>
          <p className={`flex w-1/3`}>
          {
            (cargo.length < 90 || viewBiografy) ? cargo : cargo.substring(0, 90).concat('...')
          }
          </p>
        </div>
        { 
          viewBiografy && <BioInfo bio={biografia}/> 
        }
      </article>
      <hr/>
    </>
  )
}