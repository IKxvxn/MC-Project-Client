//login
export const username = [{ required: true, message: '🦴 Por favor digite su usuario' }]
export const password = [{ required: true, message: '🦴 Por favor digite su contraseña' }]

//create user
export const newUsername = [
    { required: true, message: '🦴 Por favor elija su usuario' },
    { min: 5, message: '🦴 Número de caracteres mínimo: 5' }
]

export const newPassword = [
    { required: true, message: '🦴 Por favor elija su contraseña' },
    { pattern: "(?=.*?[0-9])(?=.*?[A-Za-z]).+", message: '🦴 Debe contener números y letras' }
]

//Create deck
export const newDeckName = [
    { required: true, message: '🦴 Por favor elija un nombre para el mazo' },
    { min: 5, message: '🦴 Número de caracteres mínimo: 5' }
]

//Import deck
export const importDeckCode = [
    { required: true, message: '🦴 Por favor proporcione el código del mazo' }
]

//Create card
export const newCardName = [
    { required: true, message: '🦴 Por favor elija un nombre para la carta' },
]

export const newDatoName = [
    { required: true, message: '🦴 Por favor elija un nombre para el dato' },
]

export const newDescripcion = [
    { required: true, message: '🦴 Por favor elija una descripción para el dato' },
]

//Create quizz
export const pickDecks = [
    { required: true, message: '🦴 Por favor elija al menos un mazo o una carta' },
]