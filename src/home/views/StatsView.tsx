import { StatsItem } from "../components"
import People from "../../assets/svg/people_alt.svg";
import Calendar from "../../assets/svg/calendar-days.svg";
import HowToVote from "../../assets/svg/2how_to_vote.svg";
import Time from "../../assets/svg/access_time_filled.svg";

export const StatsView = () => {
  return (
    <section className='flex flex-1 flex-col md:px-12 py-12 md:p-12 xl:flex-row mt-4 items-center bg-blue-100'>
      <article className='flex flex-1 flex-col items-center'>
        <div>
          <h2 className='text-3xl md:text-4xl text-center xl:text-start font-semibold'>
            <span className='text-gray-700'>Información </span> 
            <span className='text-red-500'>Relevante</span>
          </h2>
          <p className='text-base text-gray-700 text-center mt-2'>Visualice el estado actual del proceso electoral en <b>tiempo real</b>.</p>
        </div>
      </article>

      <article className='flex lg:flex-1 max-sm:w-full mt-4 xl:mt-0 md:flex-row items-center justify-around lg:justify-center'>
        <div className='flex flex-col md:mr-16 lg:mr-32'>
          <StatsItem icon={ People } info="487" description="Diputados"/>
          <StatsItem icon={ Calendar } info="23-9-2024" description="Recuento Final"/>
        </div>
        <div className='flex flex-col'>
          <StatsItem icon={ HowToVote } info="3,926,456" description="Votos Realizados"/>
          <StatsItem icon={ Time } info="3 sem. 4 días" description="Tiempo Restante."/>
        </div>
      </article>
    </section>
  )
}
