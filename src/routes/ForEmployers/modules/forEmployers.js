/* @flow */
// ------------------------------------
// Constants
// ------------------------------------
export const EMPLOYER_FORM_POST_SUCCESS = 'EMPLOYER_FORM_POST_SUCCESS'
export const EMPLOYER_FORM_POST_FAILURE = 'EMPLOYER_FORM_POST_FAILURE'

// ------------------------------------
// Actions
// ------------------------------------

export function employerFormPostSuccess (): Action {
  console.log('success')
  return {
    type: EMPLOYER_FORM_POST_SUCCESS,
    success: true
  }
}

export function employerFormPostFailure (): Action {
  return {
    type: EMPLOYER_FORM_POST_FAILURE,
    success: false
  }
}

export const submitEmployerForm = (formData): Function => {
  return (dispatch: Function, getState: Function): Promise => {
    return new Promise((resolve: Function): void => {
      setTimeout(() => {
        dispatch(employerFormPostSuccess)
        resolve()
      }, 200)
    })
  }
}

export const actions = {
  submitEmployerForm,
  employerFormPostSuccess,
  employerFormPostFailure
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [EMPLOYER_FORM_POST_SUCCESS]: (state: boolean, action: {success: boolean}): boolean => action.success,
  [EMPLOYER_FORM_POST_FAILURE]: (state: boolean, action: {success: boolean}): boolean => action.failure

}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = false
export default function forEmployersReducer (state: boolean = initialState, action: Action): boolean {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
