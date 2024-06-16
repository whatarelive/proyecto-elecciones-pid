import { NavButton } from "../../util";


export const PresentationView = () => {
    return (
        <section className="flex flex-col md:flex-row min-h-min px-6 py-8 xl:px-20 md:py-14 bg-gradient-to-b from-indigo-400 to-white">
            <article className="flex flex-1 items-center self-center">
                <div className='flex flex-1 flex-col ml-5 items-start'>
                    <h1 className="flex flex-col font-semibold text-5xl xl:text-7xl text-gray-700">
                        <span>Elecciones</span>
                        <span>Provinciales</span>
                    </h1>
                    <div className="flex flex-1 flex-row justify-center items-baseline">
                        <p className="text-5xl xl:text-7xl font-semibold text-red-500">CU</p>
                        <p className="text-5xl xl:text-7xl font-semibold text-blue-600">B</p>
                        <p className="text-5xl xl:text-7xl font-semibold text-white">A</p>
                        <p className="text-5xl xl:text-7xl font-semibold text-blue-600">N</p>
                        <p className="text-5xl xl:text-7xl font-semibold text-white">A</p>
                        <p className="text-5xl xl:text-7xl font-semibold text-blue-600 mr-3">S</p>
                        <p className="text-2xl xl:text-3xl font-bold text-gray-700">2024</p>
                    </div>
                    <p className="mt-4 mb-8 text-start xl:text-lg text-gray-500">
                        Tu decisión importa. <b>Vota</b> para construir una mejor nación.
                    </p>
                    <NavButton title="VOTAR" destiny="diputados"/>
                </div>
            </article>

            <article className="flex flex-1 m-auto mt-4 p-6 justify-center items-center">
                <img src='/src/assets/voto.png' className='sm:max-w-md md:max-w-xs lg:max-w-md xl:max-w-xl' alt='Votación'></img>
            </article>
        </section>
    )
}