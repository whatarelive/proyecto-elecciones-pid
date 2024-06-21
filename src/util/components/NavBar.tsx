import { useState } from "react";
import { NavButton } from "./NavButton";
import { NavItem } from "./NavItem";


export const NavBar = () => {

  const [ enable, setEnable ] = useState( false );

  return (
    <header className='flex flex-col md:flex-row py-2 px-4 md:px-20 lg:px-32 justify-between bg-white opacity-85'>
      <div className='flex flex-row items-center justify-between selection:select-none cursor-default'>
        <h2>
          <span className='text-red-600 font-bold text-2xl'>Cuba</span>
          <span className='text-gray-950 font-bold text-2xl'>Voto</span>
        </h2>
        <button className="md:hidden" onClick={() => setEnable( !enable )}>
          <img src="/src/assets/svg/menu.svg" alt="Menu Navegación" />
        </button>
      </div>
      <nav className={`${ !enable ? 'hidden' : '' } md:flex`}>
        <div className='flex flex-col md:flex-row md:gap-6 items-start md:items-center'>
          <NavItem title="Inicio" destiny={'/home'}/>
          <NavItem title="Diputados" destiny={'/diputados'}/>
          <NavItem title="Resultados" destiny={'/stats'}/>
          <NavButton title="Registrarse" destiny="login" icon='flecha-correcta.png' />
        </div>
      </nav>
    </header>
  )
}


