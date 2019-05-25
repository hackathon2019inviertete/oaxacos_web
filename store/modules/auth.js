import {
  SIGN_IN_ADMIN_REQUEST,
  SIGN_IN_ADMIN_SUCCESS,
  SIGN_IN_ADMIN_ERROR,
  SIGN_UP_ADMIN_REQUEST,
  SIGN_UP_ADMIN_SUCCESS,
  SIGN_UP_ADMIN_ERROR,
  AUTH_SIGN_OUT
} from '../actions/auth'

import {
  ADMIN_PROFILE_REQUEST,
  HOME_ROUTE_UPDATE
} from '../actions/user'

import AuthServices from '../../services/AuthServices'
import axios from 'axios'

const state = {
  token: localStorage.getItem('user-token') || '',
  status: ''
}

const getters = {
  isAuthenticated: state => !!state.token,
  authStatus: state => state.status
}

const actions = {

  [SIGN_UP_ADMIN_REQUEST]: async function ({ commit, dispatch }, admin) {
    // Commit del registro como generador
    commit(SIGN_UP_ADMIN_REQUEST)
    try {
      // Llamar al servidor
      const signUpResult = await AuthServices.signUpAdmin(admin)
      // Guardar datos en localStorage
      localStorage.setItem('user-token', signUpResult.token)
      localStorage.setItem('user-type', signUpResult.userType)
      // Commit del registro exitoso del generador
      commit(SIGN_UP_ADMIN_SUCCESS, signUpResult.token)
      // Configurar token de manera global
      axios.defaults.headers.common['x-auth-token'] = signUpResult.token
      // El usuario ya tiene su token
      dispatch(ADMIN_PROFILE_REQUEST)
      // Devolver token
      return {
        token: signUpResult
      }
    } catch (err) {
      // Commit del registro fallido del generador
      commit(SIGN_UP_ADMIN_ERROR, err)
      // Remover token
      localStorage.removeItem('user-token')
      // Devolver error
      return {
        error: err.response.data.error
      }
    }
  },

  // Iniciar como administrador
  [SIGN_IN_ADMIN_REQUEST]: async function ({ commit, dispatch }, admin) {
  // Commit del inicio como administrador
    commit(SIGN_IN_ADMIN_REQUEST)
    try {
      // Llamar al servidor
      const signInResult = await AuthServices.signInAdmin(admin)
      // Guardar el token en el localStorage
      localStorage.setItem('user-token', signInResult.token)
      localStorage.setItem('user-type', signInResult.userType)
      // Commit del inicio exitoso del administrador
      commit(SIGN_IN_ADMIN_SUCCESS, signInResult.token)
      // Configurar token de manera global
      axios.defaults.headers.common['x-auth-token'] = signInResult.token
      // El usuario ya tiene su token
      dispatch(ADMIN_PROFILE_REQUEST)
      // Devolver token
      return {
        token: signInResult
      }
    } catch (err) {
      // Commit del inicio fallido del administrador
      commit(SIGN_IN_ADMIN_ERROR, err)
      // Remover token
      localStorage.removeItem('user-token')
      // Devolver error
      throw new Error(err.response.data.error)
    }
  },
  // Cerrar sesión
  [AUTH_SIGN_OUT]: async function ({ commit, dispatch }) {
    commit(AUTH_SIGN_OUT)

    // Remover objetos del local storage
    localStorage.removeItem('user-token')
    localStorage.removeItem('user-type')

    // Remover default header
    delete axios.defaults.headers.common['x-auth-token']

    // Modificar ruta de inicio
    commit(HOME_ROUTE_UPDATE, '')

    return true
  }
}

const mutations = {
  [SIGN_IN_ADMIN_REQUEST]: (state) => {
    state.status = 'loading'
  },
  [SIGN_IN_ADMIN_SUCCESS]: (state, token) => {
    state.status = 'success'
    state.token = token
  },
  [SIGN_IN_ADMIN_ERROR]: (state) => {
    state.status = 'error'
  },
  [SIGN_UP_ADMIN_SUCCESS]: (state, token) => {
    state.status = 'success'
    state.token = token
  },
  [SIGN_UP_ADMIN_ERROR]: (state) => {
    state.status = 'error'
  },
  [SIGN_UP_ADMIN_REQUEST]: (state) => {
    state.status = 'loading'
  },
  [AUTH_SIGN_OUT]: (state) => {
    state.token = ''
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
