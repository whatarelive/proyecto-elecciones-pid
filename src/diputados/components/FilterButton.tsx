import FilterArrow from "../../assets/svg/keyboard_arrow_down.svg";

interface Props {
  title: string
}

export const FilterButton = ({ title }: Props) => {
  
  const handleClick = () => {}

  return (
    <div className='flex w-1/3 px-2' onClick={ handleClick } >
      <p className='font-semibold'>{title}</p>
      <img
        className='px-2 hover:cursor-pointer' 
        src={ FilterArrow } 
        alt={`Ordenar por ${title}`}
      />
    </div>
  )
}
