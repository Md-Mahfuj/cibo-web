import React from "react"
import "./Footer.css"

import Image from '../../assets/image/Image'


const Footer = () => {
    return (
        <div className="container footer_main">


            <div className="footer_web_section">
                <img className="web_logo_footer" src={Image.cibo}/>
                <p className="footer_descation">
                    Lorem ipsum dolor sit amet,
                    consectetur adipiscing<br/>
                    elit, sed do eiusmod tempor<br/>
                    incididunt ut labore et dolore<br/>
                    magna aliqua. Ut enim ad minim veniam,
                </p>
                <div className="socail_icon">
                    <img src={Image.fb}/>

                    <img className="fb_con" src={Image.twitter}/>

                    <img className="fb_con" src={Image.instragram}/>


                </div>
            </div>
            <div className="Navigate_section" >
                <h2 className="text-title" >Navigate</h2>
                <h5 className="text-style">Best sellers</h5>

                <h5 className="text-style">Buying Guide</h5>

                <h5 className="text-style">Blog</h5>
                <h5 className="text-style">Affiliates</h5>
                <h5 className="text-style">Affiliates</h5>


            </div>
            <div className="Choose_section">
                <h2 className="text-title">Why Choose us</h2>

                <h5 className="text-style">Shipping & Return</h5>
                <h5 className="text-style">Secure Shopping</h5>
                <h5 className="text-style">Gallary</h5>
                <h5 className="text-style">Featured</h5>
                <h5 className="text-style">Featured</h5>
            </div>



            <div className="donload_section">
                <h2 className="text-title Download-title ">Download Our Apps</h2>

                <div >
                    <img src={Image.appStore}/>
                    <img src={Image.playStore}/>

                </div>
                <div className="email_section">
                    <img className="email_icon" src={Image.email}/>
                    <p className="text-style">Email Us: Support@CIBO.com</p>
                </div>
                <div className="live_chat">
                    <p className="live_chat_title">Live Chat</p>

                </div>

            </div>





        </div>
    );
};
export default Footer;