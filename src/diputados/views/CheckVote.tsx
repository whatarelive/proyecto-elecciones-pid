import Check from "../../assets/svg/check_circle.svg";

export const CheckVote = () => {
  return (
    <div className='flex flex-row'>
        <img className='w-7' src={ Check } alt="Valido"/>
        <div className='px-2'>
          <p className='font-semibold text-green-600'>VOTO EFECTUADO</p>
          <span className='text-gray-400'>Toca para saber mas</span>
        </div>
    </div>
  )
}
