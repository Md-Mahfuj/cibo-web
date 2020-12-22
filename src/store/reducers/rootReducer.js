
const initialState={
    Count:99
}



function rootReducer(state=initialState,action) {


    switch(action.type){

        case 'ADD':{
            return{
                Count:state.Count+1
            }
        }

        case "SUB":{
            return{
                Count:state.Count-1
            }
        }

        default:return state
    }



}
export default rootReducer;