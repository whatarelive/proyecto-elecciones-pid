import { ProvRegion } from "../components";
import { FilterLayout } from "../layout";

// --------------------- SVG ---------------------
import Occidente from "../../assets/svg/icon.svg";
import Centro from "../../assets/svg/icon-3.svg";
import Oriente from "../../assets/svg/icon-2.svg";
// -----------------------------------------------

const Image = ({image, title}: {image: string, title: string}) => (
  <div className='flex flex-1 m-4 p-4 bg-gray-100 rounded-lg'>
    <img 
      src={ image } 
      alt={`Region de ${title}`}
      className='m-auto w-40'
    />
  </div>
)

export const ProvinceFilter = () => {
  return (
    <FilterLayout title='PROVINCIA'>
      <div className='flex flex-row'>
        <Image image={ Occidente } title="Occidente"/>
        <Image image={ Centro } title="Centro"/>
        <Image image={ Oriente } title="Oriente"/>
      </div>
      <div className='flex flex-row'>
        <ProvRegion title="Occidente"/>
        <ProvRegion title="Centro"/>
        <ProvRegion title="Oriente"/>
      </div>
    </FilterLayout>
  )
}
