import {useNavigate} from "react-router";

export const PresentationView = () => {

    // Objeto navigate
    const navigate = useNavigate();

    // Función de navegación a la pantalla de votacion.
    const onClickNavigate = () => {
        navigate(
            '/votacion',
            {replace: true}
        );
    }

    return (
        <section className="flex-1 min-h-min bg-gradient-to-b from-blue-700 to-white">
            <article className="flex flex-1 flex-row m-auto">
                <div className="flex flex-1 flex-col m-auto items-center">
                    <div className='flex flex-1 flex-col items-start'>
                        <h1 className="flex flex-col font-bold text-8xl text-gray-800">
                            <span>Elecciones</span>
                            <span>Provinciales</span>
                        </h1>
                        <div className="flex flex-1 flex-row justify-center items-baseline">
                            <p className="text-8xl font-bold text-red-500">CU</p>
                            <p className="text-8xl font-bold text-blue-600">B</p>
                            <p className="text-8xl font-bold text-white">A</p>
                            <p className="text-8xl font-bold text-blue-600">N</p>
                            <p className="text-8xl font-bold text-white">A</p>
                            <p className="text-8xl font-bold text-blue-600 mr-3">S</p>
                            <p className="text-5xl font-bold text-gray-800">2024</p>
                        </div>
                        <p className="mt-2 text-center text-xl text-gray-700">
                            Tu decisión importa. Vota para construir una mejor nación.
                        </p>
                        <button
                            className="bg-blue-800 mt-10 px-5 py-2 text-white font-semibold rounded hover:bg-blue-600"
                            onClick={ onClickNavigate }>
                            VOTAR
                        </button>
                    </div>
                </div>
                <div className="flex flex-1 m-auto p-28 justify-center items-center">
                    <img src='/src/assets' className='flex w-auto h-auto m-auto' alt=''></img>
                </div>
            </article>
        </section>
    )
}