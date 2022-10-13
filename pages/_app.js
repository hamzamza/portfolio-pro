import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Head from 'next/head'
import '../styles/globals.css'
import axios  from "axios"


const Layout = ({children}) => 
<div>  
   <div className=' min-h-screen bgcolor font-heebo'> <Navbar/> 
    {children}
    <Footer/> </div>
</div> 
function MyApp({ Component, pageProps ,}) {
 
  return <Layout > <Component {...pageProps} /></Layout>

}

export default MyApp
