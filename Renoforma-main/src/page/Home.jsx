import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import Hero from '../components/home/Hero'
import Diferencial from '../components/Diferencial'
import Services from '../components/home/Services'
import Products from '../components/home/Products'
import SobreNos from '../components/home/SobreNos'
import Localização from '../components/home/Localizacao'
import Pagamento from '../components/home/Pagamento'
import VerProdutos from '../components/home/VerProdutos'


function Home() {
    return (
        <>
            <Header />

            <Hero />

            <Diferencial />

            <Services />

            <Products />
            <SobreNos />
            <Localização/>
            <Footer />
            <VerProdutos/>

        </>
    )
}

export default Home

