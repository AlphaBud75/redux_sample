initialState = {
    username: ''
}

const updateUsernameValue = (action, payload) =>{
    reduxState.username = payload;
}


const addLeadingLettertoUsername = (action, payload) =>{
    reduxState.username = payload + reduxState.username;
}

