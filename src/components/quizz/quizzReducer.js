import * as Acciones from './quizzActions'

const DEFAULT_STATE = {
    quiz: [],
    isCreating: false
}

const homeReducer = (state = DEFAULT_STATE, action) => {

    switch (action.type) {
        case Acciones.CREATE_QUIZZ_REQUEST:
            return {
                ...state,
                isCreating: true
            }
        case Acciones.CREATE_QUIZZ_FAILURE:
            return {
                ...state,
                isCreating: false
            }
        case Acciones.CREATE_QUIZZ_SUCCESS:
            return {
                ...state,
                isCreating: false,
                quiz: action.quiz
            }
        default:
            return state
    }
}

export default homeReducer