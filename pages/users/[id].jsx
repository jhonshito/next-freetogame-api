
import Link from "next/link"
const PagesTwo = ({data}) => {

  console.log(data)
  return (
    <>
    <section className="grid w-full h-full text-white bg-dark md:h-[100vh] md:grid-cols-2">
      <div>
        <img className="w-[90%] md:w-[80%] pt-10 pl-10" src={data.thumbnail} alt={`Esta es la imagen de ${data.title}`} />
      <div className="bottom-0 py-5 w-[90%] md:w-[80%]">
      <h2 className="text-2xl font-bold text-center uppercase text-nuevoBlue">infomacion sombre el juego</h2>
      <div className="mt-4 font-bold text-center uppercase pb-17">
          <p>graphics : <span className="lowercase text-nuevoBlue">{data.minimum_system_requirements.graphics}</span></p>
          <p>memory : <span className="lowercase text-nuevoBlue">{data.minimum_system_requirements.memory}</span></p>
          <p>os : <span className="lowercase text-nuevoBlue">{data.minimum_system_requirements.os}</span></p>
          <p>processor : <span className="lowercase text-nuevoBlue">{data.minimum_system_requirements.processor}</span></p>
        </div>
      </div>
      </div>
      <div className="items-center pr-5 mt-8 ml-5 mr-5 md:-ml-20 mb-7">
        <h2 className="text-2xl font-bold uppercase md:text-4xl mb-7">{data.title}</h2>
        <p className="font-semibold text-opacidad">{data.description}</p>
      <Link className="flex justify-center py-1 mx-auto mt-6 font-bold text-center uppercase rounded-lg w-60 bg-nuevoBlue" href='/'>Inicio</Link>
      </div>
    <div className="md:w-[200%] flex-wrap flex justify-center bg-dark gap-8 pb-7 pt-5">

      {
        data.screenshots.map(item => (

          <img key={item.id} className="h-40 w-80" src={item.image} alt="" />
        ))
      }
      </div>
    </section>
    </>
  )
}


export default PagesTwo
export const getServerSideProps = async({query: {id}}) => {

  const res = await fetch(`https://www.freetogame.com/api/game?id=${id}`)
  const data = await res.json()
  return{
    props:{
      data
    }
  }
}