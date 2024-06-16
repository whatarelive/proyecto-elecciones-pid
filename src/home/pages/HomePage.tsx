import { PresentationView, PrivacyView, StatsView, StepsView } from "../views";

export const HomePage = () => {
  return (
    <main className='flex flex-1 flex-col justify-center'>
      <PresentationView/>
      <StepsView/>
      <StatsView/>
      <PrivacyView/>
    </main>
  )
}
