import { NavItem } from "./NavItem";

interface PropsButton {
  title: string,
  destiny: string,
  icon?: string,
}

export const NavButton = ( props: PropsButton ) => {
  
  const { title, destiny, icon } = props;

  const ImgIcon = () => icon ? <img className='max-h-4 ml-2' src={`/src/assets/${icon}`} alt={'Next'}/> : <></>;

  return (
    <button className='flex flex-row py-2 px-7 bg-blue-700 items-center rounded hover:bg-blue-600'>
      <NavItem title={ title } destiny={`/${destiny}`} color={'text-white'}/>
      <ImgIcon/>
    </button>
  )
}
