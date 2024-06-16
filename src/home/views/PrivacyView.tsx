import { NavButton } from "../../util";

export const PrivacyView = () => {
  return (
    <section className='flex flex-1 flex-col md:flex-row mt-16 items-center justify-center'>
      <div className='flex'>
        <img 
          className='sm:max-w-md md:max-w-xs lg:max-w-md' 
          src="/src/assets/seguridad.png" 
          alt="Imagen de privacidad"/>
      </div>
      <div className='flex w-10/12 md:w-6/12 md:pr-8 py-8 flex-col items-center md:items-start'>
        <h2 className='text-2xl md:text-3xl font-semibold text-gray-700'>Registro y Privacidad</h2>
        <p className='text-md text-gray-600 my-5 text-center md:text-start'>
            Para ejercer el voto, primero debe registrarse. Una vez verificada su cuenta, podrá hacerlo.
            Su privacidad es primordial, y sus datos se manejan con estrictas normas de protección.
            Para saber más sobre el tema consulte nuestras <b>normas y políticas de privacidad</b>
        </p>
        <NavButton title="Registrarse" destiny="login" icon='flecha-correcta.png'/>
      </div>
    </section>
  )
}
