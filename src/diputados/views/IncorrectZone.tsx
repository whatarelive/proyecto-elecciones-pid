import Incorrect from "../../assets/svg/warning.svg";

export const IncorrectZone = () => {
  return (
    <div className='flex flex-row'>
      <img className='w-7' src={ Incorrect } alt="Valido"/>
      <div className='px-2'>
        <p className='font-semibold text-amber-400'>ZONA DE VOTACIÓN INCORRECTA</p>
        <span className='text-gray-400'>Toca para volver a tu zona</span>
      </div>
    </div>
  )
}
