import React, {useState} from "react"

import "./Presentation.css"
import Carousel from "react-bootstrap/Carousel";
import Image from "../../assets/image/Image"

import Data from "../../component/Cart_Item/Data";
import {data} from "../../component/Category/data"
import Category from "../../component/Category/Category_Cart";


const Presentation = (props) => {
    const [cate, setCate] = useState(data);





    return (
        <div className="container Presentation">


            <div className="Category_section">
                <h4 className="top-category">Top Category</h4>
                <Category cate={cate}/>

            </div>
            <div className="Presentation_img_section">

                <Carousel  >
                    <Carousel.Item>
                        <img
                            className="d-block w-100 slider_img"
                            src={Image.silder}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            {/*<h3>First slide label</h3>*/}
                            {/*<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>*/}
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 slider_img"
                            src={Image.silder1}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            {/*<h3>Second slide label</h3>*/}
                            {/*<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>*/}
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 slider_img"
                            src={Image.silder2}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            {/*<h3>Third slide label</h3>*/}
                            {/*<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>*/}
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>



                <div className="future_section" >

                   <div className="future_section_one">

                      <img className="future_img" src={Image.prime}/>

                   </div>

                    <div className="future_section_two">

                        <img className="future_img_two"  src={Image.friends}/>

                    </div>

                </div>

            </div>

        </div>
    );
};
export default Presentation;