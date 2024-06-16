import { NavLink } from "react-router-dom";

interface PropsNavItem {
  title: string,
  destiny: string,
  color?: 'text-gray-700' | string
} 

export const NavItem = ( props: PropsNavItem ) => {

    const { title, destiny, color } = props;

  return (
    <NavLink 
      to={ destiny }
      className={({isActive}) =>
        `my-1 text-base font-semibold 
        ${ color } 
        ${ color !== 'text-white' && 'hover:text-amber-500' } 
        ${ isActive ? "text-blue-800" : "" }`
      }>
        { title }
    </NavLink>
  )
}


