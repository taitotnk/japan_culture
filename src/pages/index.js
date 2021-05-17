import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tabi Site</title>
        
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          What is Tabi?
        </h1>

        <div className="m-auto px-4 py-8 max-w-xl">
          <div className="bg-white shadow-2xl" >
              <div>
                  <img src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"></img>
              </div>
              <div className="px-4 py-2 mt-2 bg-white">
                  <h2 className="font-bold text-2xl text-gray-800">Who uses Tailwind?</h2>
                      <p className="sm:text-sm text-xs text-gray-700 px-2 mr-1 my-3">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora reiciendis ad architecto at aut placeat quia, minus dolor praesentium officia maxime deserunt porro amet ab debitis deleniti modi soluta similique...
                      </p>
                  <div className="user flex items-center -ml-3 mt-8 mb-4">
                      <div className="user-logo">
                          <img className="w-10 h-10 sm:w-12 sm:h-12 object-cover rounded-full mx-4  shadow" src="https://images.unsplash.com/photo-1607789382281-1152591ec0da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80" alt="avatar"></img>
                      </div>
                          <a href="https://twitter.com/GressierCosme1" target="_blank" className="text-gray-500">@GressierCosme1</a>
                  </div>
              </div>
          </div>
      </div>

      </main>

      <footer className={styles.footer}>
        <b>© 2021 Copyright Taito All Rights Reserved.</b>
      </footer>
    </div>
  )
}
