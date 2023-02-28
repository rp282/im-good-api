import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {

  function handleSend() {
    fetch('/api/')
  }

  return (
    <div className={styles.container}>
      I'm good.
      <button onClick={() => handleSend()}>Send Message</button>
    </div>
  )
}
