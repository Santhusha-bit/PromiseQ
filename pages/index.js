import Head from 'next/head'
import homeStyles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title> promiseQ </title>
      </Head>
      <h1 className={homeStyles.title}> Hello Next ! </h1>
    </div>
  )
}
