import { FilterBar } from "../views/FilterBar";
import { SearchBar } from "../views/SearchBar";
import data from "../data/prueba.json";
import { Diputado } from "../components/Diputado";


export const DiputadosPage = () => {
  return (
    <main className='flex flex-col w-4/5 min-h-screen m-auto mt-20 rounded-ss-3xl rounded-se-3xl bg-white'>
      {/* <!-- barra pricipal --> */}
      <SearchBar/>
      <hr />
      
      {/* <!-- barra de informacion de las columnas --> */}
      <FilterBar/>
      <hr />

      <ul>
        {
          data.map( (item, index) => (
              <>
                <Diputado key={index} diputado={item}/>
                <hr />
              </>
            )
          )
        }
      </ul>
    </main>
  )
}
