



const initState = {
    products: [],
    totalPrice: 0,
    totalQuantities: 0
}

const CartReducer = (state = initState, action) => {
    let findPro;
    let index;
    switch(action.type){
        case 'ADD_TO_CART':
            const {product,quantity} = action.payload;
            const check = state.products.find(pr => pr._id === product._id);
            if(check){
                return state;
            } else {
                const Tprice = state.totalPrice + product.price * quantity;
                const Tquantities = state.totalQuantities + quantity;
                product.quantity = quantity;
                return {
                    ...state, products: [...state.products, product],totalPrice: Tprice, totalQuantities: Tquantities
                }

            }
        // case 'INC':
        //     findPro = state.products.find(product => product.id === action.payload);
        //     index = state.products.findIndex(product => product.id === action.payload);
        //     findPro.quantity += 1;
        //     state.products[index] = findPro;
        //     const t=state.totalPrice + findPro.spePrice;
        //
        //     return {
        //         ...state,
        //         totalPrice: state.totalPrice + findPro.spePrice, totalQuantities: state.totalQuantities+1
        //     }
        case 'INC':
            findPro = state.products.find(product => product._id === action.payload);
            index = state.products.findIndex(product => product._id === action.payload);
            findPro.quantity += 1;
            var T =findPro.price*findPro.quantity;
            state.products[index] = findPro;
            return {
                ...state,
                totalPrice: state.totalPrice +  T, totalQuantities: state.totalQuantities+1
            }

        case "DEC":
            findPro = state.products.find(product => product._id === action.payload);
            index = state.products.findIndex(product => product._id === action.payload);
            if(findPro.quantity > 1){
                findPro.quantity -= 1;
                state.products[index] = findPro;
                return {
                    ...state,
                    totalPrice: state.totalPrice - findPro.price, totalQuantities: state.totalQuantities - 1
                }
            } else {
                return state;
            }
        case 'REMOVE':
            findPro = state.products.find(product => product._id === action.payload);
            const filtered = state.products.filter(product => product._id !== action.payload);
            return {
                ...state,
                products: filtered,
                totalPrice: state.totalPrice - findPro.price * findPro.quantity, totalQuantities: state.totalQuantities - findPro.quantity
            }
        default:
            return state;
    }

}
export default CartReducer;