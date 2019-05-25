import {
  ADMIN_PROFILE_REQUEST,
  ADMIN_PROFILE_ERROR,
  ADMIN_PROFILE_SUCCESS,
  HOME_ROUTE_UPDATE
} from '../actions/user'
import { AUTH_SIGN_OUT } from '../actions/auth'

import AuthServices from '../../services/AuthServices'
import Vue from 'vue'
import router from '@/router'
import axios from 'axios'

const state = {
  status: '',
  homeRoute: '',
  profile: {}
}

const getters = {
  getProfile: state => state.profile,
  isProfileLoaded: state => !!state.profile.name,
  getHomeRoute: state => state.homeRoute
}

const actions = {
  [ADMIN_PROFILE_REQUEST]: async function ({ commit, dispatch }) {
    // Commit de que el admin quiere obtener su perfil
    commit(ADMIN_PROFILE_REQUEST)
    try {
      // Obtener el perfil usando la API
      const adminProfileResult = await AuthServices.getAdminProfile()
      // Revisar si se regresó un nuevo token
      if (adminProfileResult.headers['x-auth-token']) {
        const token = adminProfileResult.headers['x-auth-token']
        // Guardar el token en el localStorage
        localStorage.setItem('user-token', token)
        // Configurar token de manera global
        axios.defaults.headers.common['x-auth-token'] = token
      }
      // Commit indicando que se obtuvo el perfil de manera exitosa
      commit(ADMIN_PROFILE_SUCCESS, adminProfileResult.data)
      // Actualizar ruta home
      commit(HOME_ROUTE_UPDATE, 'home-admin')
      // Regresar perfil
      return adminProfileResult.data
    } catch (err) {
      // Ocurrió un error al obtener el perfil del usuario
      commit(ADMIN_PROFILE_ERROR, err)
      // dispatch(AUTH_LOGOUT)
    }
  }
}

const mutations = {
  [ADMIN_PROFILE_REQUEST]: (state) => {
    state.status = 'loading'
  },
  [ADMIN_PROFILE_SUCCESS]: (state, profile) => {
    state.status = 'success'
    Vue.set(state, 'profile', profile)
  },
  [ADMIN_PROFILE_ERROR]: (state) => {
    state.status = 'error'
  },
  [AUTH_SIGN_OUT]: (state) => {
    state.profile = {}
  },
  [HOME_ROUTE_UPDATE]: (state, routeName) => {
    state.homeRoute = routeName
    router.replace({ name: routeName })
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
