import { useEffect } from "react";
import { setDiputados } from "../../redux";
import { useReduxData } from "../hooks";
import { FilterBar } from "../views/FilterBar";
import { SearchBar } from "../views/SearchBar";
import { Diputado } from "../components";


export const DiputadosPage = () => {

  const {dispatch, diputados} = useReduxData();

  useEffect(() => {
    dispatch( setDiputados() );  
  }, []);
  
  return (
    <main className='flex flex-col w-4/5 min-h-screen m-auto mt-12 rounded-ss-3xl rounded-se-3xl bg-white'>
      {/* <!-- barra pricipal --> */}
      <SearchBar/>
      <hr />

      {/* <!-- barra de informacion de las columnas --> */}
      <FilterBar/>
      <hr />

      {/* <!-- lista de Diputados --> */}
      <ul>
        {
          diputados.map((item, index) => (
              <li key={index}>
                <Diputado diputados={{...item, id: index}}/>
              </li>
            )
          )
        }
      </ul>
    </main>
  )
}
