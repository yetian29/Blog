

import Navbar from "../navigations/Navbar"
import Footer from "../navigations/Footer" 

function Layout(props) {
  return (
    <>
        <Navbar/>
        {props.children}
        <Footer/>

    </>
  )
}

export default Layout