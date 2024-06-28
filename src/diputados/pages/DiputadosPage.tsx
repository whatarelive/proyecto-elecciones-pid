import { FilterBar } from "../views/FilterBar";
import { SearchBar } from "../views/SearchBar";
import { Diputado } from "../components/Diputado";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState, setDiputados } from "../../redux";
import { useEffect } from "react";


export const DiputadosPage = () => {

  const { diputados } = useSelector((state: RootState) => state.data);
  const dispactch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispactch( setDiputados() );  
  }, []);
  
  return (
    <main className='flex flex-col w-4/5 min-h-screen m-auto mt-20 rounded-ss-3xl rounded-se-3xl bg-white'>
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
