import { Password, FindPerson, HowToVote } from "../../assets/svg";
import { StepsItem } from "../components";


export const StepsView = () => {
  return (
    <section className='flex flex-1 flex-col justify-center py-7 xl:px-20 md:py-14'>
      <article className='flex flex-1 flex-col justify-center items-center'>
        <h2 className='text-3xl md:text-4xl font-semibold'>¿Cómo ejercer el voto?</h2>
        <p className='text-base mt-2 text-gray-500 '>Siga estos tres sencillos pasos</p>
      </article>

      <article className='flex flex-1 flex-col md:flex-row mt-12 gap-10 md:gap-0 items-center justify-center'>
        <StepsItem 
          title="1. Registro" 
          description="Introduzca sus credenciales para verificar su identidad de forma rápida y segura.">
          <Password size={48}/>
        </StepsItem>

        <StepsItem 
          title="2. Elección" 
          description="Seleccione al candidato que mejor represente sus ideales y aspiraciones para la nación.">
          <FindPerson size={48}/>
        </StepsItem>
        
        <StepsItem 
          title="3. Voto" 
          description="Haga click en el botón Votar para emitir su voto de manera segura y anónima.">
          <HowToVote size={46}/>
        </StepsItem>
      </article>
    </section>
  )
}
