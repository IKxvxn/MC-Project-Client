import * as Acciones from '../home/homeActions'

const DEFAULT_STATE = {
    decks: [],
    isLoading: false,
    isCreating: false
}

const homeReducer = (state = DEFAULT_STATE, action) => {
    let updateData

    switch (action.type) {
        case Acciones.CREATE_DECK_REQUEST:
            return {
                ...state,
                isCreating: true
            }
        case Acciones.CREATE_DECK_FAILURE:
            return {
                ...state,
                isCreating: false
            }
        case Acciones.CREATE_DECK_SUCCESS:
            return {
                ...state,
                isCreating: false,
                decks: [...state.decks, action.deck]
            }
        case Acciones.IMPORT_DECK_REQUEST:
            return {
                ...state,
                isCreating: true
            }
        case Acciones.IMPORT_DECK_FAILURE:
            return {
                ...state,
                isCreating: false
            }
        case Acciones.IMPORT_DECK_SUCCESS:
            return {
                ...state,
                isCreating: false,
                decks: [...state.decks, action.deck]
            }
        case Acciones.GET_DECKS_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case Acciones.GET_DECKS_FAILURE:
            return {
                ...state,
                isLoading: false
            }
        case Acciones.GET_DECKS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                decks: action.decks
            }
        case Acciones.UPDATE_DECK_REQUEST:
            return {
                ...state,
                isCreating: true
            }
        case Acciones.UPDATE_DECK_FAILURE:
            return {
                ...state,
                isCreating: false
            }
        case Acciones.UPDATE_DECK_SUCCESS:
            return {
                ...state,
                isCreating: false,
                decks: state.decks.map(deck => deck._id === action.deck._id ? action.deck : deck)
            }
        case Acciones.DELETE_DECK_REQUEST:
            return {
                ...state,
                isCreating: true
            }
        case Acciones.DELETE_DECK_FAILURE:
            return {
                ...state,
                isCreating: false
            }
        case Acciones.DELETE_DECK_SUCCESS:
            return {
                ...state,
                isCreating: false,
                decks: state.decks.filter(deck => deck._id !== action.deckId)
            }
        case Acciones.CREATE_CARD_REQUEST:
            return {
                ...state,
                isCreating: true
            }
        case Acciones.CREATE_CARD_FAILURE:
            return {
                ...state,
                isCreating: false
            }
        case Acciones.CREATE_CARD_SUCCESS:
            updateData = state.decks.find(deck => deck._id === action.deckId)
            updateData.cards = [...updateData.cards, action.card]
            return {
                ...state,
                isCreating: false,
            }
        case Acciones.UPDATE_CARD_REQUEST:
            return {
                ...state,
                isCreating: true
            }
        case Acciones.UPDATE_CARD_FAILURE:
            return {
                ...state,
                isCreating: false
            }
        case Acciones.UPDATE_CARD_SUCCESS:
            updateData = state.decks.find(deck => deck._id === action.deckId)
            updateData.cards = updateData.cards.map(card => card._id === action.card._id ? action.card : card)
            return {
                ...state,
                isCreating: false,
            }
        case Acciones.DELETE_CARD_REQUEST:
            return {
                ...state,
                isCreating: true
            }
        case Acciones.DELETE_CARD_FAILURE:
            return {
                ...state,
                isCreating: false
            }
        case Acciones.DELETE_CARD_SUCCESS:
            updateData = state.decks.find(deck => deck._id === action.deckId)
            updateData.cards = updateData.cards.filter(card => card._id !== action.cardId)
            return {
                ...state,
                isCreating: false,
            }
        default:
            return state

    }

}

export default homeReducer