import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          Get started by <code>pages/index.js</code>
        </p>
      </main>
        <div className="clay card">
            Fluffy ipsum dolor sit amet consectetur...
        </div>
        <div className="clay card">
            Fluffy ipsum dolor sit amet consectetur...
        </div>

      <Footer />
    </div>
  )
}
