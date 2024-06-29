import { useReduxData } from "../hooks";
import { FilterLayout } from "../layout";
import { enableViewFilter, townFilter } from "../../redux";
import provinces from "../data/dataFilter.json";

export const TownFilter = () => {

  const { dispatch, province, town } = useReduxData();

  const towns = provinces.filter( prov => prov.province === province ).pop()?.towns as string[];

  const handledClick = ( town: string ) => {
    dispatch( townFilter({ town }));
    dispatch( enableViewFilter({lastFilterView: 'Town'}));
  }

  return (
    <FilterLayout 
      title={` MUNICIPIO`}
      subTitle={ <span className='font-semibold text-red-500'>{ province }</span> }
    >
      <ul className='grid grid-cols-3 gap-1 m-4'>
        {
          towns.map((municipio, index) => (
            <li 
              key={index}
              onClick={() => handledClick(municipio) }
              className={`w-fit py-2 px-4 font-semibold cursor-pointer text-gray-800 opacity-90 rounded-3xl hover:text-red-400 hover:bg-red-100
                ${town === municipio ? 'text-red-400 bg-red-100 hover:text-amber-400 hover:bg-amber-100' : ''}`
              } 
            >
              <p>{ municipio }</p>
            </li>
          ))
        }
      </ul>
    </FilterLayout>
  )
}
