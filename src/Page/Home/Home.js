import React, {useState} from "react"
import Data from "../../component/Cart_Item/Data"
import "./Home.css"
import Image from "../../assets/image/Image"
import search from '../../assets/image/search.png'
import CartT from "../../component/Cart_Item/Cart"
import {useHistory} from "react-router";
import '../Layout/Layout.css'
import acIcon from "../../assets/image/ac_edit.png";
import rightArrow from "../../assets/image/rightArrow.png";

const Home = (props) => {
    const [projectList, setShop] = useState(Data.Shop);
    const [loginClose, setLoginClose] = useState(false);
    const [cartClose, setCartClose] = useState(false);

    const history = useHistory();

    const Sideware = (props) => {
        const list=[
            {title:"My account"},
            {title:"order"},
            {title:"Campains"},
            {title:"bkash Payment"},
            {title:"logout"},
        ]
        return (
            <div className={loginClose ? 'login-dr-section' : "login-dr-section-two"}>

                <div className="loin-dr-contin">

                    <img onClick={() => setLoginClose(!loginClose)} className="loin-close-icon" src={Image.close}/>

                    <div className="profile-sideware-section">
                        <img className="profile-sideware-logo" src={Image.profileIcon}/>
                        <div className="profile-sideware-name-section">
                            <h5>md.mahfuj</h5>
                            <h5>01627352018</h5>
                        </div>

                    </div>
                    <h1 className="profile-sideware-hr"></h1>

                    {
                        list.map(item=>{
                            return(
                                <div className="profile-sideware-item-list">
                                    <img className="sideware-ac-icon" src={Image.acIcon}/>
                                    <h6 className="profile-sideware-item-title">{item.title}</h6>

                                </div>
                            )
                        })
                    }
                </div>


            </div>
        );
    }


    return (
        <div>
            {/*start top welcome section*/}

            <div className={"header_contact"}>
                <h3 className={"welcome"}>welcome to our store</h3>
                <div className="phome_section">
                    <img className="phone_img" src={Image.phone}/>
                    <h4 className={"number"}> Call Us: 0162 735 2018</h4>

                </div>
                <div className="spece"></div>
                <div
                    className="help_section"
                >
                    <img className="help_img" src={Image.help}/>
                    <h4 className="help_title">Help & More</h4>
                </div>
                <div
                    className={"english"}
                >
                    <img src={Image.BD} className={"country_img"}/>
                    <h4 className="country-title">Dhaka</h4>
                </div>
            </div>

            {/*end top welcome section*/}

            {/*start add cart section */}
            <CartT
                cartClose={cartClose}
                setCartClose={setCartClose}
            />

            {/*end add cart section*/}

            {/*start top login slider section*/}
            <Sideware/>
            {/*end top login slider section*/}

            {/*start search section */}
            <div className="container header_sectionTwo">

                <div className="web_logo_section">
                    <img className="web_logo"
                         src={Image.w_logo}
                         onClick={() => {
                             history.push("/")
                         }}
                    />

                    <p className="short_description">
                        Short Description of<br/>
                        Cibo online store</p>
                </div>
                <div className="search_section">
                    <input className="search" type="search" placeholder="search for.... "/>

                    <button className="search_button"><img className="img" src={search}/></button>

                </div>

                <div className="account_section">


                    <a href={""} className="account"><img className="account_img" src={Image.love}/></a>


                    <a onClick={() => setCartClose(!cartClose)} className="account-one cart_img">
                        <img className="account_img" src={Image.cart2}/>

                        {/*<ShoppingCartOutlined  className="cart_img"/>*/}

                    </a>


                    <a onClick={() => setLoginClose(!loginClose)} className="account_two"> <img className="account_img"
                                                                                                src={Image.account}/></a>


                </div>

            </div>

            <div className="mobile_divice-section container">
                <img className="menu" src={Image.menu1}/>

                <div className="search_section_mobile">
                    <input className="search_mobile" type="search" placeholder="search for ... "/>

                    <button className="search_button"><img className="img" src={search}/></button>

                </div>

            </div>

            <div className="msk">


                <div onClick={() => setCartClose(!cartClose)}   className="mobile-footer-section-cart">
                    <img className="mobile-footer-cart" src={Image.cart2}/>


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


                <div onClick={() => setLoginClose(!loginClose)} className="mobile-footer-login-section">
                    <img className="mobile-footer-login-icon " src={Image.account}/>
                    {/*<h6 className="mobile-footer-login-title">Account</h6>*/}


                </div>


            </div>


        </div>
    );
};
export default Home;
