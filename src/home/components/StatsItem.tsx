interface PropsStats {
  icon: string,
  info: string,
  description: string
}

export const StatsItem = ( props: PropsStats ) => {

  const { icon, info, description } = props;

  return (
    <div className='flex flex-row gap-4 my-4'>
      <img className='w-12' src={`/src/assets/svg/${icon}.svg`} alt={`Icono de ${description}`}/>
      <div>
        <p className='text-lg md:text-2xl font-bold text-gray-700'>{ info }</p>
        <p className='text-sm font-semibold text-gray-400'>{ description }</p>
      </div>
    </div>
  )
}
