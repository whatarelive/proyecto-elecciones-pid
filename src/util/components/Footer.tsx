import Git from "../../assets/svg/git.svg";

export const Footer = () => {
  return (
    <footer className='flex flex-1 flex-col sm:flex-row items-center mt-16 pt-8 pb-16 sm:justify-around bg-0-footer'>
      <div className='flex flex-col items-center md:flex-none md:items-start'>
        <h2 className='text-2xl font-bold'>
          <span className='text-red-500'>Cuba</span>
          <span className='text-white'>Voto</span>
        </h2>
        <p className='text-white text-opacity-95 mt-5'>Copyright @ 2024 Cubavoto.<br/>Todos los derechos reservados</p>
      </div>

      <div className='flex flex-col items-center my-6 md:my-0 md:flex-none md:items-start'>
        <p className='text-lg text-white text-opacity-95 mt-2'>Equipo de desarrollo</p>
        <a className='md:mt-4 text-sm font-semibold text-red-500 opacity-90 underline hover:text-red-400' href="">Sobre nosotros</a>
      </div>

      <div className='flex flex-col items-center md:flex-none md:items-start'>
        <p className='text-lg text-white text-opacity-95 mt-2'>Repositorio del proyecto</p>
        <div className='flex mt-4 items-center'>
          <img src={ Git }  alt="Logo de GitHub"/>
          <a className='text-sm font-semibold ml-2 text-red-500 opacity-90 underline hover:text-red-400' href="#">Disponible en GitHub</a>
        </div>
      </div>
    </footer>
  )
}
