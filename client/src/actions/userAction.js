import { AUTH, SIGN_UP_FAIL } from '../constants/actionsConstants.js'
import * as api from '../axios'

export const signup = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData)

    dispatch({ type: AUTH, payload: data })

    history.push('/')
  } catch (error) {
    dispatch({
      type: SIGN_UP_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}