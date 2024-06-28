
interface FilterProps {
    title: string,
    children: React.ReactNode
} 

export const FilterLayout = ( props: FilterProps ) => {

    const { title, children } = props;

  return (
    <article className='absolute rounded-xl mt-4 shadow-md bg-white'>
        <h5 className='bg-green-500 text-xl font-medium opacity-90 text-gray-800'>
            { title }
        </h5>
        <div>
            {children}
        </div>
    </article>
  )
}
