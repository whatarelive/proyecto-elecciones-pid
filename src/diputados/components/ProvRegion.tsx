import { useDispatch, useSelector } from "react-redux";
import provinces from "../data/dataFilter.json";
import { AppDispatch, enableViewFilter, provincefilter, RootState } from "../../redux";

interface ProvRegion {
  title: string,
  image: string
}

export const ProvRegion = ( props : ProvRegion ) => {

  const { title, image } = props;
  const region = provinces.filter( prov => prov.region === title );
  
  const { province } = useSelector((state:RootState) => state.data);
  const dispatch = useDispatch<AppDispatch>();

  const handledClick = (province: string) => {
    dispatch( provincefilter({ province }));
    dispatch( enableViewFilter({ lastFilterView: 'Town' }) );
  }

  return (
    <div className='flex flex-col'>
      <div className='flex flex-1 m-4 p-4 bg-gray-100 rounded-lg'>
        <img 
          src={ image } 
          alt={`Region de ${title}`}
          className='m-auto w-40'
        />
      </div>
      <div className='mx-4'>
        <h5 className='text-lg font-semibold mb-2'>
          {title}
        </h5>
        <ul className='flex flex-col'>
          {
            region.map((prov, index) => (
              <li key={index} onClick={() => handledClick(prov.province)}
                className={
                  `w-fit py-2 px-4 font-semibold cursor-pointer text-gray-800 opacity-90 rounded-3xl 
                  ${ prov.province === province && 'text-red-400 bg-red-100'}`
                } 
              >
                <p>{prov.province}</p>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}
