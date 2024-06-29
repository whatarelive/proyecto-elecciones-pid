import { ProvRegion } from "../components";
import { FilterLayout } from "../layout";

// --------------------- SVG ---------------------
import Occidente from "../../assets/svg/icon.svg";
import Centro from "../../assets/svg/icon-3.svg";
import Oriente from "../../assets/svg/icon-2.svg";
// -----------------------------------------------


export const ProvinceFilter = () => {
  return (
    <FilterLayout title='PROVINCIA'>
      <ProvRegion title="Occidente" image={ Occidente }/>
      <ProvRegion title="Centro" image={ Centro } />
      <ProvRegion title="Oriente" image={ Oriente }/>
    </FilterLayout>
  )
}
