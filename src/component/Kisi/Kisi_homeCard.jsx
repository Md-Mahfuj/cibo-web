
import React from 'react'

import "./index.css"
import {useHistory} from "react-router";


const KisiCard=()=>{
    const history = useHistory();
    const list=[
        {
            title:"ছাদকৃষি ",
            // url:"https://cdn.jamuna.tv/2020/06/bb9d089c-tree.jpg",
            url:"https://images.prothomalo.com/prothomalo%2Fimport%2Fmedia%2F2019%2F02%2F06%2F490d617808814501932742dc86103213-5c5a72002792d.jpg?auto=format%2Ccompress&format=webp&w=480&dpr=2.6",

        },
        {
            title:"মাছ চাষ",
            url:"https://agricare24.com/wp-content/uploads/2020/06/%E0%A6%AE%E0%A6%BE%E0%A6%9B-%E0%A6%9A%E0%A6%BE%E0%A6%B7.jpg",
        },
        {
            title:"মুরগির খামার ",
            url:"https://hindisahayta.in/wp-content/uploads/2019/09/Murgi-Palan-Kaise-Kare-Hindi-Me-Murgi-Palan-Kaise-Kiya-Jata-Hai-Poulry-Form-Buisness-Kaise-Kare-Murgi-Palan-Kaise-Shuru-Kare.png",
        },
        {
            title:"গরু পালন  ",
            url:"https://www.canvasmagazine.com.bd/wp-content/uploads/2018/08/goru-1-640x516.jpg",
        },
        {
            title:"কবুতর পালন ",
            url:"https://i.pinimg.com/originals/55/06/7a/55067ac9efd8dfac5ad4e4baf5c5cfea.jpg",
        },

    ]
    const KisiNext=()=>{
        history.push("/kisi")
    }
    return(
        <div className="kisi-main-dive-section">
            {
                list.map((item,index)=>{
                    return(
                        <div onClick={KisiNext} className="kisi-card-main-section">
                            <img className="kisi-card-icon" src={item.url}/>
                            <h5 className="kisi-card-title">{item.title}</h5>

                        </div>
                    )

                })
            }

        </div>
    )
}

export default KisiCard;