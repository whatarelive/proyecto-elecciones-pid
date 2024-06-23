import Location from "../../assets/svg/location_on.svg";
import Search from "../../assets/svg/search.svg";
import { CheckVote } from "./CheckVote";

export const SearchBar = () => {
  return (
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
        <div className='flex h-11 bg-red-100 pr-4 rounded-lg'>
            <label className='flex items-center'>
                <img className='px-3' src={ Location } alt="location"/>
                <h5 className='text-red-600'>La Habana, La Lisa</h5>
            </label>
        </div>
      </div>

      {/* Seccion de comporbacion de votacion */}
      <CheckVote/>
    </div> 
  )
}


