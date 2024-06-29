import { enableViewFilter } from "../../redux";
import { CheckVote } from "./CheckVote";
import { ProvinceFilter } from "./ProvinceFilter";
// import { IncorrectZone } from "./IncorrectZone";
import Location from "../../assets/svg/location_on.svg";
import Search from "../../assets/svg/search.svg";
import { useReduxData } from "../hooks";
import { TownFilter } from "./TownFilter";

export const SearchBar = () => {

  const { dispatch, province, town, lastFilterView } = useReduxData();

  const handleClick = () => {
    const view = lastFilterView === 'none' ? 'Province' : 'none'; 
    dispatch(enableViewFilter({ lastFilterView: view }));
  }

  return (
    <>
      <div className='flex px-5 py-4 items-center justify-between'>
        {/* Secion de busqueda y filtros */}
        <div className='flex flex-1 justify-start gap-5'>

          {/* Cuadro de busqueda */}
          <div className='flex h-11 bg-blue-100 rounded-lg'>
            <label className='flex items-center'>
                <img className='px-3' src={ Search } alt="Search Delegado"/>
                <form onSubmit={() => {}}>
                    <input 
                        className='bg-transparent px-2 h-full outline-none border-none placeholder:text-blue-500 text-blue-600' 
                        type='search' 
                        placeholder="Buscar delegado"
                        />
                </form>
            </label>
          </div>
        
          {/* Cuadro de filtros de provincia y municipio */}
          <div>
            <div
              className='flex h-11 bg-red-100 pr-4 rounded-lg hover:bg-red-200 hover:text-red-700'
              onClick={ handleClick } 
              >
              <label className='flex items-center'>
                <img className='px-3' src={ Location } alt="location"/>
                <h5 className='text-red-600 select-none'>{`${province} ${town ? ', ' + town : ''}`}</h5>
              </label>
            </div>
            {
              lastFilterView !== "none" && (lastFilterView === 'Town' ? <TownFilter/> : <ProvinceFilter/>)
            }
          </div>
        </div>

        {/* Seccion de comporbacion de votacion */}
        <CheckVote/>
        {/* <IncorrectZone/> */}
      </div> 
    </>
  )
}


