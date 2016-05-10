/* @flow */
// ------------------------------------
// Constants
// ------------------------------------
export const CONTACT_FORM_POST_SUCCESS = 'CONTACT_FORM_POST_SUCCESS'
export const CONTACT_FORM_POST_FAILURE = 'CONTACT_FORM_POST_FAILURE'

// ------------------------------------
// Actions
// ------------------------------------

/*  This is a thunk, meaning it is a function that immediately
 returns a function for lazy evaluation. It is incredibly useful for
 creating async actions, especially when combined with redux-thunk!

 NOTE: This is solely for demonstration purposes. In a real application,
 you'd probably want to dispatch an action of COUNTER_DOUBLE and let the
 reducer take care of this logic.  */

export function contactFormPostSuccess (): Action {
  console.log('success')
  return {
    type: CONTACT_FORM_POST_SUCCESS,
    success: true
  }
}

export function contactFormPostFailure (): Action {
  return {
    type: CONTACT_FORM_POST_FAILURE,
    success: false
  }
}

export const submitContactForm = (formData): Function => {
  return (dispatch: Function, getState: Function): Promise => {
    return new Promise((resolve: Function): void => {
      setTimeout(() => {
        dispatch(contactFormPostSuccess)
        resolve()
      }, 200)
    })
  }
}

export const actions = {
  submitContactForm,
  contactFormPostSuccess,
  contactFormPostFailure
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [CONTACT_FORM_POST_SUCCESS]: (state: boolean, action: {success: boolean}): boolean => action.success,
  [CONTACT_FORM_POST_FAILURE]: (state: boolean, action: {success: boolean}): boolean => action.failure

}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = false
export default function contactUsReducer (state: boolean = initialState, action: Action): boolean {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
