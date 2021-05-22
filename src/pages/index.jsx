import Head from 'next/head'
import Image from 'next/image'
import { card } from '../data/data'
import styles from '../styles/Home.module.css'

export default function Home({ cardContents }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tabi Site</title>
      </Head>

      <main className={styles.main}>
        <div className={styles.top}>
          <Image className={styles.topimg} src="/img/old_japan.jpg" 
          alt="Mt.fuji" 
          width={800} 
          height={600} />
          <h1>
            What is Tabi?
          </h1>
          <div className={styles.scroll_arrow}>
          <Image className="animate-bounce" src="/img/down-arrow.png"
          alt="bottom-arrow"
          width={100}
          height={100}/>
          </div>
        </div>

{/* card---------------------------------------- */}
        {cardContents.map( cardContent => (
          <div className="mt-10">
          <div className="transition duration-500 ease-in-out bg-blue-600 hover:bg-red-600 transform hover:-translate-y-1 hover:scale-110 ...">
          <div className="m-auto px-4 py-8 max-w-xl">
            <div className="bg-white shadow-2xl" >
                <div>
                    <Image src={cardContent.img}
                    alt="tabi_img"
                    layout="responsive"
                    width={600}
                    height={400}>
                    </Image>
                </div>
                <div className="px-4 py-2 mt-2 bg-white">
                    <h2 className="font-bold text-4xl text-gray-800">{cardContent.sub_title}</h2>
                        <p className="sm:text-lg text-xs text-gray-700 px-2 mr-1 my-3">
                          {cardContent.description}
                        </p>
                </div>
            </div>
        </div>
        </div>
        </div>
        ))}

{/* ------------------------------------------------------ */}


      </main>

      <footer className={styles.footer}>
        <b>© 2021 Copyright Taito All Rights Reserved.</b>
      </footer>
    </div>
  )
}

export const getStaticProps = async () => {
  return {
    props: {
      cardContents: card,
    },
  }
}
