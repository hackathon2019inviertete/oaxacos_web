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
    let response = await apiClient.get('reports/nearby', {
      params: {
        latitude,
        longitude
      }
    })

    let reports = response.data

    reports = reports.map((report) => {
      let title

      switch (report.report_type) {
        case 0:
          title = "Reporte de semáforo"
          break
        case 1:
          title = "Reporte de accidente"
          break
        case 2:
          title = "Reporte de bloqueo"
          break
        case 3:
          title = "Reporte de obstrucción o defecto en carretera"
          break
      }

      let reportCopy = Object.assign({}, report)
      reportCopy.title = title

      return reportCopy
    })

    return reports
  } catch (err) {
    throw err
  }
}

async function getReport(reportId) {
  try {
    const response = await apiClient.get(`reports/${reportId}`)
    let report = response.data

    let title

    switch (report.report_type) {
      case 0:
        title = "Reporte de semáforo"
        break
      case 1:
        title = "Reporte de accidente"
        break
      case 2:
        title = "Reporte de bloqueo"
        break
      case 3:
        title = "Reporte de obstrucción o defecto en carretera"
        break
    }

    let reportCopy = Object.assign({}, report)
    reportCopy.title = title

    return reportCopy
  } catch (err) {
    throw err
  }
}

async function updateReportStatus(reportId, newStatus) {
  try {
    const result = await apiClient.post(`reports/${reportId}/update-status`, {
      data: {
        status: newStatus
      }
    })

    return result
  } catch (err) {
    throw err
  }
}

export default { getReports, getReport, updateReportStatus }