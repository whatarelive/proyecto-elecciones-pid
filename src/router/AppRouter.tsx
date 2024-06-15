import { Navigate, Route, Routes } from "react-router";
import { HomePage } from "../home";
import { DiputadosPage } from "../diputados";
import { LoginPage } from "../auth";
import { StatsPage } from "../stats";


export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/home" element={ <HomePage/> }/>
      <Route path="/diputados" element={ <DiputadosPage/> }/>
      <Route path="/login" element={ <LoginPage/> }/>
      <Route path="/stats" element={ <StatsPage/> }/>

      <Route path="/*" element={ <Navigate to={'/home'} /> }></Route>
    </Routes>
  )
}
