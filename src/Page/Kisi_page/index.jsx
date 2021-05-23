import React, {useState} from "react"
import Layout from "../Layout/Layout";
import './index.css'
import ShopCart from "../../component/Cart_Item/Shop_Cart";
import Data from "../../component/Cart_Item/Data";
import Image from "./../../assets/image/Image"



const KisiPage=()=>{
    const [project1, setShop1] = useState(Data.Shop1);
    const [couse, setCouse] = useState(false);


    const KisiCourseCard=(props)=>{
        const list=[
            {
                title:"আম চাষের ভিডিও",
                number:1,

            },
            {
                title:"পিয়ারা চাষের ভিডিও",
                number:2,
            },
            {
                title:"সবজি চাষের ভিডিও",
                number:3,
            },
            {
                title:"বেগুন চাষের ভিডিও",
                number:4,
            },
            {
                title:"আলু চাষের ভিডিও",
                number:5,
            },

        ]
        return(
            <div className="kisi-course-card-main">
                {
                    list.map((item,index)=>{
                        return(
                            <div className="kisi-course-card">


                                <div className="kisi-course-title-section">
                                    <h4 className="kisi-course-count-number">{item.number}</h4>
                                    <h6 className="kisi-course-title">{item.title}</h6>
                                </div>
                                <img  className="kisi-course-arrow-icon" src={Image.downArrow}/>
                            </div>
                        )
                    })
                }
            </div>
        )
    }

    const KisiCoursePopu=()=>{
        return(
            <div>
                    <div className="kisi-course-player-section">
                        <iframe
                            className="kisi-iframe"
                              src="https://www.youtube.com/embed/xsgufTibtHo"
                                title="YouTube video player" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen>

                        </iframe>
                    </div>

            </div>
        )
    }

    return(
        <Layout>
            <div className="container kisi-main-page-section">
                <div className="kisi-main-lift-section">
                    <div className="kisi-banner-section">
                        <img className="kisi-banner-image" src="https://www.bahumatrik.com/media/imgAll/2018September/roof_garden20181221172928.jpg"/>
                        <div>
                            <h4 className="kisi-banner-title">আপনি কি  আপনার ছাদকৃষি মডেল করতে চান ?</h4>
                            <h4 className="kisi-banner-title-one">কি কি থাকছে</h4>
                        </div>
                        <h5 className="kisi-model-price">10,000 টাকায়</h5>

                    </div>




                    <div className="kisi-content-section">
                        <h4 className="kisi-details-page-product-title">ছাদকৃষি</h4>
                        <ShopCart projectList={project1}/>
                    </div>


                    <KisiCoursePopu/>


                </div>
                <div className="kisi-main-right-section">

                    <h4 className="kisi-shikha-title">শিখার জন্য ক্লিক করুন</h4>
                    <h4 className="kisi-video-courses-title">(Video Course)</h4>
                    <KisiCourseCard/>

                </div>


            </div>

        </Layout>
    )
}
export default KisiPage;