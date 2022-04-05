const ADD_PUPIL = "ADD_PUPIL"
const REMOVE_PUPIL = "REMOVE_PUPIL"

export const reducer = (state,action) => {
    switch(action.type){
        case ADD_PUPIL:
            return [
                ...state,
                {
             id: Date.now().toString(),
             name: action.name, 
             surname:action.surname, 
             age:action.age 
            },
        ];
        case REMOVE_PUPIL:
            const pupils = state.filter(item => item.id !== action.id)
            return pupils
        default:
            return state
    }
};

export const addAction = (name,surname,age) => {
    return{
        type: ADD_PUPIL,
        name: name,
        surname: surname,
        age: age
    }
}

export const removeAction = (id) => {
    return {
        type:REMOVE_PUPIL,
        id:id
    }
}