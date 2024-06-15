import { NavItem } from "./NavItem";


export const NavButton = () => {
  return (
    <div className='flex flex-row py-1.5 px-5 bg-blue-800 items-center rounded hover:bg-blue-600'>
      <NavItem title="Registrarse" destiny={'/login'} color={'text-white'}/>
      <img className='max-h-4 ml-2'src="/src/assets/flecha-correcta.png" alt={'Next'} />
    </div>
  )
}
