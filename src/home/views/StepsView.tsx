import { StepsItem } from "../components";


export const StepsView = () => {
  return (
    <section className='flex flex-1 flex-col justify-center'>
          <article className='flex flex-1 flex-col'>
              <h2>¿Cómo ejercer el voto?</h2>
              <p>Siga estos tres sencillos pasos</p>
          </article>
          <article>
              <StepsItem/>
              <StepsItem/>
              <StepsItem/>
          </article>
      </section>
  )
}
