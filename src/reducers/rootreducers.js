

const initState = {
    posts: [
        {id:'1', title: 'hello some randam randam',body:'hello some randam randam hello some randam randam hello some randam randam'},
        {id:'2', title: 'hello some randam randam',body:'hello some randam randam hello some randam randam hello some randam randam'},
        {id:'3', title: 'hello some randam randam',body:'hello some randam randam hello some randam randam hello some randam randam'}

    ]
}

const rootReducer = (state = initState, action) => {

    return state;
}

export default rootReducer;