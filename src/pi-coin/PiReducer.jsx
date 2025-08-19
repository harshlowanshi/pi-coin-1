const PiReducer=(state,action)=>{

    switch (action.type) {
        case "ADD":
            return{
                ...state,
                password: action.payload
            }
            break;
    
        default:
            return state;
    }

}

export default PiReducer