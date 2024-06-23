import { SearchBar } from "../views/SearchBar"

export const DiputadosPage = () => {
  return (
    <main className='flex flex-col w-4/5 min-h-screen m-auto mt-24 rounded-ss-3xl rounded-se-3xl bg-white'>
      {/* <!-- barra pricipal --> */}
      <SearchBar/>
      {/* <!-- barra de informacion de las columnas --> */}
      <div className="data-bar">
        <div className="data-item">
          <p className="tab">Nombre</p>
          <img src="keyboard_arrow_down.svg" alt=""/>
        </div>
        <div className="data-item">
          <p className="tab">Edad</p>
          <img src="keyboard_arrow_down.svg" alt=""/>
        </div>
        <div className="data-item">
          <p className="tab">Cargo</p>
        </div>
      </div>

      <ul>
      </ul>
    </main>
  )
}
