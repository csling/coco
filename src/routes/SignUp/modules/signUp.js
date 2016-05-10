/* @flow */
// ------------------------------------
// Constants
// ------------------------------------
export const USER_SIGN_UP_SUCCESS = 'USER_SIGN_UP_SUCCESS'
export const USER_SIGN_UP_FAILURE = 'USER_SIGN_UP_FAILURE'

// ------------------------------------
// Actions
// ------------------------------------

export function userSignUpSuccess (): Action {
  console.log('success')
  return {
    type: USER_SIGN_UP_SUCCESS,
    success: true
  }
}

export function userSignUpFailure (): Action {
  return {
    type: USER_SIGN_UP_FAILURE,
    success: false
  }
}

export const submitUserSignUp = (formData): Function => {
  return (dispatch: Function, getState: Function): Promise => {
    return new Promise((resolve: Function): void => {
      setTimeout(() => {
        dispatch(userSignUpSuccess)
        resolve()
      }, 200)
    })
  }
}

export const actions = {
  submitUserSignUp,
  userSignUpSuccess,
  userSignUpFailure
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [USER_SIGN_UP_SUCCESS]: (state: boolean, action: {success: boolean}): boolean => action.success,
  [USER_SIGN_UP_FAILURE]: (state: boolean, action: {success: boolean}): boolean => action.failure

}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = false
export default function signUpReducer (state: boolean = initialState, action: Action): boolean {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
