export const rootRoute = '/'
export const homeRoute = '/inicio'
export const homeNotFoundRoute = '/inicio/404'
export const accountRoute = homeRoute + '/cuenta'
export const decksRoute = homeRoute + '/mazos'
export const cardsRoute = decksRoute + '/:mazoId'
export const cardsRouteCreator = decksRoute + '/'
export const quizzesRoute = homeRoute + '/quizzes' 