// import React, {useState} from "react"
// import "./desktop.css"
// import Count from "./Count"
// import Layout from "../Layout/Layout";
// import {connect} from "react-redux"
//
//
//
// const Desktop=(props)=>{
//
//     return(
//         <Layout>
//             <h1>Desktop is heare </h1>
//             {/*<Count/>*/}
//
//
//
//             <button onClick={()=>props.add}>add</button>
//             <button onClick={()=>props.SUB}>sub</button>
//
//
//         </Layout>
//     );
//
//
//
//     function mapDispatchToProps(dispatch) {
//         return{
//             add:()=>{dispatch({type:'ADD'})},
//             SUB:()=>{dispatch({type:'SUB'})}
//
//
//         }
//
//     }
//
//
//
// };
// export default connect(null,mapDispatchToProps)(Desktop);