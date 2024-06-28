import { useDispatch } from "react-redux";
import provinces from "../data/dataFilter.json";
import { AppDispatch, enableViewFilter, provincefilter } from "../../redux";

interface ProvRegion {
  title: string
}

export const ProvRegion = ( props : ProvRegion ) => {

  const { title } = props;
  const region = provinces.filter( prov => prov.region === title );
  const dispatch = useDispatch<AppDispatch>();

  const handledClick = (event: React.MouseEvent<HTMLElement>, province: string) => {
    event.preventDefault();
    dispatch( provincefilter({ province }));
    dispatch( enableViewFilter() );
  }

  return (
    <div className='flex flex-col m-auto'>
      <h5>{title}</h5>
      <ul>
        {
          region.map((prov, index) => (
            <li key={index} onClick={(event) => handledClick(event, prov.province)}>
              <p className='cursor-pointer'>{prov.province}</p>
            </li>
          ))
        }
      </ul>
    </div>
  )
}
