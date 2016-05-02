/* @flow */
// ------------------------------------
// Constants
// ------------------------------------
export const LOGIN_FAILURE = 'LOGIN_FAILURE'
export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const UPDATE_LOGIN_NAME = 'UPDATE_LOGIN_NAME'
export const UPDATE_LOGIN_PASSWORD = 'UPDATE_LOGIN_PASSWORD'

// ------------------------------------
// Actions
// ------------------------------------

/*  NOTE: "Action" is a Flow interface defined in https://github.com/TechnologyAdvice/flow-interfaces
 If you're unfamiliar with Flow, you are completely welcome to avoid
 annotating your code, but if you'd like to learn more you can
 check out: flowtype.org.

 NOTE: There is currently a bug with babel-eslint where a `space-infix-ops`
 error is incorrectly thrown when using arrow functions, hence the oddity.  */

function requestLogin (credentials): Action {
  return {
    type: LOGIN_REQUEST,
    isFetching: true,
    isAuthenticated: false,
    credentials
  }
}

function receiveLogin (user): Action {
  return {
    type: LOGIN_SUCCESS,
    isFetching: false,
    isAuthenticated: true,
    idToken: user.id_token
  }
}

function loginError (message): Action {
  return {
    type: LOGIN_FAILURE,
    isFetching: false,
    isAuthenticated: false,
    message
  }
}

export const loginUser = (): Function => {
  return (dispatch: Function, getState: Function): Promise => {
    return new Promise((resolve: Function): void => {
      let loginState = getState().login
      let credentials = {username: loginState.loginName, password: loginState.loginPassword}

      let config = {
        method: 'POST',
        headers: { 'Content-Type':'application/x-www-form-urlencoded' },
        body: `username=${credentials.username}&password=${credentials.password}`
      }

      dispatch(requestLogin(credentials))

      return fetch('http://localhost:3000/sessions/create', config)
        .then( response => {
          if (!response.ok) {
            dispatch(loginError(response.statusText))
            resolve('Login failed')
          }
          else {
            let user = response.user
            localStorage.setItem('id_token', user.id_token)
            dispatch(receiveLogin(user))
            resolve(user)
          }
        })
    })
  }
}

export function updateLoginName (event): Action {
  return {
    type: UPDATE_LOGIN_NAME,
    loginName: event.target.value
  }
}

export function updateLoginPassword (event): Action {
  return {
    type: UPDATE_LOGIN_PASSWORD,
    loginPassword: event.target.value
  }
}

export const actions = {
  loginError,
  loginUser,
  receiveLogin,
  requestLogin,
  updateLoginName,
  updateLoginPassword
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [LOGIN_REQUEST]:
    (state: object,
     action: {
       isFetching: boolean,
       isAuthenticated: boolean,
       credentials: object
       }):
      object => Object.assign({}, state, {
        isFetching: action.isFetching,
        isAuthenticated: action.isAuthenticated,
        user: action.credentials
    }),
  [LOGIN_SUCCESS]:
    (state: object,
     action: {
       isFetching: boolean,
       isAuthenticated: boolean,
       idToken: object
       }):
      object => Object.assign({}, state, {
      isFetching: action.isFetching,
      isAuthenticated: action.isAuthenticated,
      errorMessage: ''
    }),
  [LOGIN_FAILURE]:
    (state: object,
     action: {
       isFetching: boolean,
       isAuthenticated: boolean,
       message: string
       }):
      object => Object.assign({}, state, {
      isFetching: action.isFetching,
      isAuthenticated: action.isAuthenticated,
      errorMessage: action.message
    }),
  [UPDATE_LOGIN_NAME]:
    (state: object,
     action: {
       loginName: string
       }):
      object => Object.assign({}, state, {
      loginName: action.loginName
    }),
  [UPDATE_LOGIN_PASSWORD]:
    (state: object,
     action: {
       loginPassword: string
       }):
      object => Object.assign({}, state, {
      loginPassword: action.loginPassword
    })
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  isFetching: false,
  isAuthenticated: localStorage.getItem('id_token') ? true : false,
  loginName: '',
  loginPassword: ''
}

export default function loginReducer (state: object = initialState, action: Action): object {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
