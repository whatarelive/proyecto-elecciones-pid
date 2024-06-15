import { NavLink } from "react-router-dom";

interface PropsNavItem {
    title: string,
    destiny: string,
    color?: string
} 

export const NavItem = ( props: PropsNavItem ) => {

    const { title, destiny, color } = props;

  return (
    <NavLink
        className={({isActive}) =>
            `nav-link text-xl mx-3 my-1 font-semibold hover:text-amber-500 
            ${ color } 
            ${ isActive ? "text-blue-800" : ""}`
        }
        to={ destiny }>
        { title }
    </NavLink>
  )
}


