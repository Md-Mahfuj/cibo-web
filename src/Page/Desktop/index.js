import React, {useState} from "react"
import "./desktop.css"
import Layout from "../Layout/Layout";
import {connect} from "react-redux"


const Desktop = (props) => {

    const [popup, setPopup] = useState(false);


    return (
        <Layout>


            <div className={popup ? 'bg-model' : 'bg-model-two'}>

                <div className='model-content'>
                    <div onClick={() => setPopup(!popup)} className={'close-button'}>+

                    </div>

                    <div>
                        <div>
                            <p>Please select your gender:</p>
                            <input type="radio" id="male" name="gender" value="male"/>

                        </div>
                        
                        <div>
                            <input type="radio" id="male" name="gender" value="male"/>

                        </div>


                    </div>

                    <h1> bangladesh</h1>

                </div>

            </div>


            <button onClick={() => setPopup(!popup)}>popup button</button>

            <h1>Desktop is heare{props.Count} </h1>


            <button onClick={() => props.ADD()}>add</button>
            <button onClick={() => props.SUB()}>sub</button>


        </Layout>
    );


};
const mapStateToProps = (state) => {
    return {
        Count: state.Count
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        ADD: () => {
            dispatch({type: 'ADD'})
        },
        SUB: () => {
            dispatch({type: 'SUB'})
        }


    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Desktop);