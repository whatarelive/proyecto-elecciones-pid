import { Diputado } from '../components/Diputado';
import { diputados } from "../data/prueba.json";

interface Diput {
  imagen: string,
  name: string,
  age: number,
  cargo: string,
  biografia: string
}

export const DiputadosPage = () => {
  return (
    <main className='flex flex-col w-4/5 min-h-screen m-auto mt-24 rounded-ss-3xl rounded-se-3xl bg-white'>
      {/* <!-- barra pricipal --> */}
      <div className='flex p-4 items-center justify-between'>
        {/* <!-- secion de busqueda y filtros --> */}
          <div className='flex'>
            {/* <!-- cuadro de busqueda --> */}
            <div className='flex h-11 bg-blue-100 rounded-lg'>
              <img src="search.svg" alt=""/>
              <input className='bg-transparent placeholder:text-blue-500' type="search" placeholder="Buscar delegado"/>
            </div>
          
            {/* <!-- cuadro de filtros de provincia y municipio --> */}
            <div className="location-box">
              <button> <img src="location_on.svg" alt="location"/> La Habana, La Lisa</button>
            </div>
          </div>

          {/* <!-- seccion de comporbacion de votacion --> */}
          <div className="check-box">
            <img src="check_circle.svg" alt=""/>
            <p className="tab tab-activa">VOTO EFECTUADO</p>
            <span>Toca para saber mas</span>
          </div>

      </div> 
      {/* <!-- barra de informacion de las columnas --> */}
      <div className="data-bar">
        <div className="data-item">
          <p className="tab">Nombre</p>
          <img src="keyboard_arrow_down.svg" alt=""/>
        </div>
        <div className="data-item">
          <p className="tab">Edad</p>
          <img src="keyboard_arrow_down.svg" alt=""/>
        </div>
        <div className="data-item">
          <p className="tab">Cargo</p>
        </div>
      </div>

      <ul>
        {
          diputados.map( (diputado: Diput) => <Diputado diputado={diputado}/>)
        }
      </ul>
    </main>
  )
}
