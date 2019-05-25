import axios from 'axios'
import settings from './settings'

// Configurar cliente de la API
const apiClient = axios.create({
  baseURL: `${settings.baseURL}`,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

async function getReports(latitude, longitude) {
  try {
    // Obtener reportes del servidor
    const reports = await apiClient.get('reports/nearby', {
      query: {
        latitude,
        longitude
      }
    })

    return reports
  } catch (err) {
    throw err
  }
}

export default { getReports }