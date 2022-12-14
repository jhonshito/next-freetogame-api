import Head from 'next/head'
import Link from 'next/link'
// import styles from '../styles/Home.module.css'

export default function Home({game}) {

  const pagesOne = game.slice(0,99)
  console.log(pagesOne)

  return (
    <div className='bg-black text-white pt-10 w-full'>
      <Head>
        <title>Prueba Api</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="flex flex-wrap gap-4 w-[98%] mx-auto">
        {
          pagesOne.map(item => (
            <div className='break-words bg-dark w-60 mx-auto' key={item.id}>
              <img className='w-60' src={item.thumbnail} alt={`Esta es la imagen de ${item.title}`} />
              <h2 className='font-bold mt-3 px-2 break-words text-lg'>{item.title}</h2>
              <div className='grid'>
                <Link className='w-56 rounded-md mx-auto text-center bg-nuevoBlue py-1 my-3' href={`/users/${item.id}`}>Información</Link>
              </div>
            </div>
          ))
        }
      </section>
      <h1 className='text-orange-500'>siiiiiu</h1>
    </div>
  )
}

export const getServerSideProps = async() => {
  const res = await fetch('https://www.freetogame.com/api/games');
  const games = await res.json();

  return{
    props:{
      game : games
    }
  }
}
