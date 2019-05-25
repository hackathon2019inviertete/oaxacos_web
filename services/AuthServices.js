import axios from 'axios'
import settings from './settings'

// Configurar cliente de la API
const apiClient = axios.create({
  baseURL: `${settings.baseURL}users/`,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

async function signUpAdmin ({ name, email, password }) {
  try {
    // Hacer post al servidor
    const signUpResult = await apiClient.post('auth/generator/sign-up', {
      name,
      email,
      password
    })

    // Regresar headers
    return {
      token: signUpResult.headers['x-auth-token'],
      userType: signUpResult.data['user_type']
    }
  } catch (err) {
    throw err
  }
}

async function signInAdmin ({ email, password }) {
  try {
    // Hacer post al servidor
    const signInResult = await apiClient.post('auth/generator/sign-in', {
      email,
      password
    })

    // Regresar headers
    return {
      token: signInResult.headers['x-auth-token'],
      profile: signInResult.data
    }
  } catch (err) {
    throw err
  }
}

export default {
  signInAdmin,
  signUpAdmin
}
