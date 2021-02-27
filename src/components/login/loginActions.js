import { message } from 'antd';
import * as API_ROUTES from '../../assets/API_Routes'
import * as CLIENT_ROUTES from '../../assets/clientRoutes'
import * as Messages from '../../assets/mensajes'
import * as LocalStorage from '../../assets/localStorage'
import * as homeActions from '../home/homeActions'

export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'

export const CREATE_ACCOUNT_REQUEST = 'CREATE_ACCOUNT_REQUEST'
export const CREATE_ACCOUNT_SUCCESS = 'CREATE_ACCOUNT_SUCCESS'
export const CREATE_ACCOUNT_FAILURE = 'CREATE_ACCOUNT_FAILURE'

export const LOAD_USER_STATE = 'LOAD_USER_STATE'

export const LOGOUT_REQUEST = 'LOGOUT_REQUEST'

export function login(usuario, history) {
    return function (dispatch) {
        dispatch({
            type: LOGIN_REQUEST
        })
        fetch(API_ROUTES.AUTH + "/account/" + usuario.username + "/" + usuario.password, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        })
            .then(response => response.json())
            .then(datos => {
                if (datos.error) {
                    message.error(datos.message)

                    dispatch({
                        type: LOGIN_FAILURE
                    })
                }
                else {
                    message.success(datos.message)

                    history.push(CLIENT_ROUTES.homeRoute)
                    LocalStorage.saveState({ user: datos.data })

                    Promise.resolve(dispatch({
                        user: datos.data,
                        type: LOGIN_SUCCESS
                    })).then(() => dispatch(homeActions.getMazos()))
                }
            })
            .catch(error => {
                message.error(Messages.serverConecctionError)
                dispatch({
                    type: LOGIN_FAILURE,
                })
            })
    }
}

export function crearCuenta(usuario) {
    return function (dispatch) {
        dispatch({
            type: CREATE_ACCOUNT_REQUEST
        })
        fetch(API_ROUTES.AUTH + "/account", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(usuario),
        })
            .then(response => response.json())
            .then(datos => {
                if (datos.error) {
                    message.error(datos.message)

                    dispatch({
                        type: CREATE_ACCOUNT_FAILURE
                    })
                }
                else {
                    message.success(datos.message)
                    dispatch({
                        type: CREATE_ACCOUNT_SUCCESS,
                    })
                }
            })
            .catch(error => {
                message.error(Messages.serverConecctionError)
                dispatch({
                    type: CREATE_ACCOUNT_FAILURE,
                })
            })
    }
}

export function loadSessionState(history) {
    return function (dispatch) {

        let user = LocalStorage.loadState()

        if (Object.keys(user).length === 0 & window.location.pathname.localeCompare(CLIENT_ROUTES.rootRoute)) {
            history.push(CLIENT_ROUTES.rootRoute)
        }
        else if (Object.keys(user).length !== 0 & !window.location.pathname.localeCompare(CLIENT_ROUTES.rootRoute)) {
            history.push(CLIENT_ROUTES.homeRoute)
        }

        dispatch({
            user: user,
            type: LOAD_USER_STATE
        })
    }
}

export function logout(history) {
    return function (dispatch) {

        LocalStorage.removeState()

        history.push(CLIENT_ROUTES.rootRoute)

        dispatch({
            user: {},
            type: LOGOUT_REQUEST
        })
    }
}