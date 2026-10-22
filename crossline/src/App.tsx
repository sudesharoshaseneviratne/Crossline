import { Brands, Products, Range } from './components/Catalog'
import { Faq } from './components/Faq'
import { Footer } from './components/Footer'
import { Gateways } from './components/Gateways'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Quote } from './components/Quote'
import { Shipping } from './components/Shipping'
import { Trust } from './components/Trust'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Products />
        <Brands />
        <Range />
        <Gateways />
        <Shipping />
        <Trust />
        <Faq />
        <Quote />
      </main>
      <Footer />
    </>
  )
}

export default App
