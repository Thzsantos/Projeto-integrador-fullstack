import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import Hero from '../components/home/Hero'
import Diferencial from '../components/Diferencial'
import Services from '../components/home/Services'
import Products from '../components/home/Products'
import SobreNos from '../components/home/SobreNos'
import Localização from '../components/home/Localizacao'
import LoginAdm from '../components/home/LoginAdm'
import CadastroAdmin from '../components/home/CadastroAdmin'

function Home() {
    return (
        <>
            <Header />

            <Hero />

            <Diferencial />

            <Services />

            <Products />
            <SobreNos />
            <Localização />
            <Footer />
            <LoginAdm />
            
           <CadastroAdmin/>
        </>
    )
}

export default Home

