import React from "react"
import Home from "../Home/Home"
import Footer from "../../component/Footer/Footer"
import './Layout.css'
import './../Home/Home.css'
import Image from "../../assets/image/Image";
import {useHistory} from "react-router";



const Layout=({children})=>{
    const history = useHistory();

    return(
        <div >
            <Home/>
            {children}
            <Footer/>


            <div className="header-item-down">


                {/*<a href={""} className="mobile-footer-section">*/}
                {/*    <img className="mobile-footer-cart" src={Image.cart2}/>*/}

                {/*</a>*/}

                <div className="mobile-footer-section-cart" >
                    <img className="mobile-footer-cart" src={Image.cart2}/>

                    {/*<h6>Cart</h6>*/}

                </div>

                {/*<div>*/}
                {/*    <img className="account_img" src={Image.love}/>*/}
                {/*</div>*/}


                <div
                    onClick={() => {
                    history.push("/")
                }}

                >

                    <img className="mobile-footer-home-icon" src={Image.homeIcon}/>


                </div>


                <div className="mobile-footer-login-section">
                     <img className="mobile-footer-login-icon " src={Image.account}/>
                    {/*<h6 className="mobile-footer-login-title">Account</h6>*/}


                </div>



            </div>

        </div>
    );
};
export default Layout;