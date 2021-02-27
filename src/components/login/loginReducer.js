import * as Acciones from './loginActions'

const DEFAULT_STATE = {
    user: {},
    isLoading: false
}

const loginReducer = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case Acciones.LOGIN_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case Acciones.LOGIN_SUCCESS:
            return {
                ...state,
                user: action.user,
            }
        case Acciones.LOGIN_FAILURE:
            return {
                ...state,
                isLoading: false
            }
        case Acciones.CREATE_ACCOUNT_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case Acciones.CREATE_ACCOUNT_FAILURE:
            return {
                ...state,
                isLoading: false
            }
        case Acciones.CREATE_ACCOUNT_SUCCESS:
            return {
                ...state,
                isLoading: false
            }
        case Acciones.LOAD_USER_STATE:
            return {
                isLoading: false,
                user: action.user
            }
        case Acciones.LOGOUT_REQUEST:
            return {
                ...state,
                user: action.user
            }
        default:
            return state

    }

}


export default loginReducer