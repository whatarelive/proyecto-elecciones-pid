import { FilterButton } from "../components";

export const FilterBar = () => {
  return (
    <div className='flex px-4 py-5 items-start'>
        <FilterButton title="Nombre"/>
        <FilterButton title="Edad"/>

        <div className='w-1/3'>
          <p className='font-semibold'>Cargo</p>
        </div>
    </div>
  )
}
