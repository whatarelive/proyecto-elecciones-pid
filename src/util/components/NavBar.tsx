import { NavItem } from "./NavItem"


export const NavBar = () => (
    <header className='flex py-2 px-40'>
        <div className='flex flex-row items-center'>
            <p className='text-red-600 font-bold text-2xl'>Cuba</p>
            <p className='text-gray-950 font-bold text-2xl'>Voto</p>
        </div>
        <nav className='flex flex-1 justify-end'>
          <div className='flex flex-row gap-4 items-center justify-end'>
            <NavItem title="Inicio" destiny={'/home'}/>
            <NavItem title="Diputados" destiny={'/provinces'}/>
            <NavItem title="Resultados" destiny={'/stats'}/>
            <div className='flex flex-row p-1 px-2.5 bg-blue-800 justify-around items-center rounded hover:bg-blue-600'>
               <NavItem title="Verificar" destiny={'/verificar'} color={'text-white'}/>
               <img
                   className='flex flex-1 max-h-5 mx-1'
                   src="/src/assets/flecha-correcta.png"
                   alt={'Next'}>
               </img>
            </div>
          </div>
        </nav>
    </header>
)

