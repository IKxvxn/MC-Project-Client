import { message } from 'antd';
import * as LocalStorage from '../../assets/localStorage'
import * as Tools from '../../assets/tools'
import * as API_ROUTES from '../../assets/API_Routes'
import * as Messages from '../../assets/mensajes'

export const CREATE_QUIZZ_REQUEST = 'CREATE_QUIZZ_REQUEST'
export const CREATE_QUIZZ_SUCCESS = 'CREATE_QUIZZ_SUCCESS'
export const CREATE_QUIZZ_FAILURE = 'CREATE_QUIZZ_FAILURE'

export function createQuizz(mazosSinFiltrar, numDePreguntas, onSuccess, onFailure) {

    return function (dispatch) {
        dispatch({
            type: CREATE_QUIZZ_REQUEST
        })

        let requestBody = {
            mazos: Tools.createQuizzDeckBodyBuilder(mazosSinFiltrar),
            numDePreguntas: numDePreguntas,
            user: LocalStorage.loadState().user
        }

        
        fetch(API_ROUTES.QUIZZ + "/", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(requestBody),
        })
            .then(response => response.json())
            .then(datos => {
                if(datos.error){
                    message.error(datos.message)

                    dispatch({
                        type: CREATE_QUIZZ_FAILURE
                    })
                    onFailure()
                }
                else {
                    message.success(datos.message)
                    dispatch({
                        type: CREATE_QUIZZ_SUCCESS,
                        quiz:datos.data
                    })

                    onSuccess()
                }
            })
            .catch(error => {
                message.error(Messages.serverConecctionError)
                dispatch({
                  type: CREATE_QUIZZ_FAILURE,
                })
            })
    }
}