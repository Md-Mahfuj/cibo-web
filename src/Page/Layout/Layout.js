import React from "react"
import Home from "../Home/Home"
import Footer from "../../component/Footer/Footer"



const Layout=({children})=>{
    return(
        <div >
            <Home/>
            {children}
            <Footer/>

        </div>
    );
};
export default Layout;