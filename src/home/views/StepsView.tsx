import { StepsItem } from "../components";
import FindPerson from "../../assets/svg/find.svg";
import HowToVote from "../../assets/svg/how_to_vote.svg";
import Password from "../../assets/svg/password-2.svg";

export const StepsView = () => {
  return (
    <section className='flex flex-1 flex-col justify-center py-7 xl:px-20 md:py-14'>
      <article className='flex flex-1 flex-col justify-center items-center'>
        <h2 className='text-3xl md:text-4xl font-semibold text-gray-700'>¿Cómo ejercer el voto?</h2>
        <p className='text-base mt-2 text-gray-500 '>Siga estos tres sencillos pasos</p>
      </article>

      <article className='flex flex-1 flex-col md:flex-row mt-12 gap-10 md:gap-0 items-center justify-center'>
        <StepsItem title="1. Registro" icon={ Password } 
          description="Introduzca sus credenciales para verificar su identidad de forma rápida y segura.">
        </StepsItem>

        <StepsItem title="2. Elección" icon={ FindPerson }
          description="Seleccione al candidato que mejor represente sus ideales y aspiraciones para la nación.">
        </StepsItem>

        <StepsItem title="3. Voto" icon={ HowToVote } 
          description="Haga click en el botón Votar para emitir su voto de manera segura y anónima.">
        </StepsItem>
      </article>
    </section>
  )
}
