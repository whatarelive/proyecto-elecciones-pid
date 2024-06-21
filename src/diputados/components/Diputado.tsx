interface Props {
  imagen: string,
  name: string,
  age: number,
  cargo: string,
  biografia: string
}

export const Diputado = ( { diputado }: { diputado:Props } ) => {

  const { imagen, name, age, cargo, biografia } = diputado;

  return (
    <article className="item">
      <div className="texto">
        <div className="avatar">
          <img src={ imagen } alt={`Imagen del diputado ${name}`}/>
          <h5>{ name }</h5>
        </div>
        <p>{ age }</p>
        <p>{ cargo }</p>
      </div>
      <div className="bio">
        <p>Biografia</p>
        <span>{ biografia }</span>  
      </div>
    </article>
  )
}
