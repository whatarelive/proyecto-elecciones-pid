export const Footer = () => {
  return (
    <footer className='flex flex-1 mt-16'>
      <div className="footer-sub-container">
        <div className="footer-logo">
          <p>CubaVoto</p>
        </div>
        <p>Copyright 2024 Cubavoto.</p>
        <p>Todos los derechos reservados</p>
      </div>

      <div className="footer-sub-container">
        <b className="footer-header">Equipo de desarrollo</b>
        <p><a className="footer-link" href="">Sobre nosotros</a></p>
      </div>

      <div className="footer-sub-container">
        <b className="footer-header">Repositorio del proyecto</b>
        <p><a className="footer-link" href="#">
            <img src="#" alt="Logo de GitHub"/>
            Disponible en GitHub
        </a></p>
      </div>
    </footer>
  )
}
