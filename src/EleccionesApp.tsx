import { useLocation } from "react-router";
import { AppRouter } from "./router/AppRouter";
import { Footer, NavBar } from "./util";


export const EleccionesApp = () => {

    const { pathname } = useLocation();

  return (
    <>
        { pathname !== '/login' && <NavBar/> }
        
        <AppRouter/>

        { pathname !== '/login' && <Footer/> }
    </>
  )
}
