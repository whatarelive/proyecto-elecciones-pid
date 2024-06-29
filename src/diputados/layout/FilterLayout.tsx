import React from "react";

interface FilterProps {
    title: string,
    children: React.ReactNode,
    subTitle?: React.ReactNode
} 

export const FilterLayout = ( props: FilterProps ) => {

    const { title, children, subTitle } = props;

  return (
    <article className='absolute rounded-xl mt-4 p-4 shadow-xl bg-white'>
        <h5 className='ml-4 text-lg font-bold opacity-90'>
            { subTitle }
            { title }
        </h5>
        <div className='flex flex-row items-start'>
            {children}
        </div>
    </article>
  )
}
