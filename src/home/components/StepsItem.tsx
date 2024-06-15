
interface PropsSteps {
    title: string,
    description: string,
    children: React.ReactNode,
}

export const StepsItem = ( props: PropsSteps ) => {

    const { title, description, children } = props;

    return (
        <div className='flex flex-1 flex-col mx-12 sm:mx-6 xl:mx-20 justify-center items-center'>
            <div className='flex'>
                <div className='absolute items-start z-10'>{children}</div>
                <div className='z-0 w-14 h-14 mat-1 ml-4 rounded-ss-2xl rounded-ee-3xl rounded-se-md rounded-es-md bg-slate-300'/>
            </div>
            <h3 className='text-2xl md:text-2xl lg:text-2xl font-semibold mt-4'>{ title }</h3>
            <p className='text-center text-gray-500 text-md mt-2'>{ description }</p>
        </div>
    )
}