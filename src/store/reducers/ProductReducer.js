import Data from '../../component/Cart_Item/Data'


const initialState={
    Products:Data.test,
    product: {}
}


function ProductReducer(state=initialState,action) {

    switch(action.type){

        case "PRODUCT":
            return {...state,product:state.Products.find(product=>product.id===parseInt(action.id))}
        case "ADD_TO_CART" :
            return {...state,Products:[...state.Products,action.payload]}
        default:return state;
    }

}
export default ProductReducer;