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
      </main>

      <footer className={styles.footer}>
        <b>© 2021 Copyright Taito All Rights Reserved.</b>
      </footer>
    </div>
  )
}
