import { ipcMain, ipcRenderer } from 'electron'

export const registerIpcServices = (services) => {
  Object.entries(services).forEach(([channel, handler]) => {
    ipcMain.handle(channel, async (event, ...args) => {
      return handler(event, ...args)
    })
  })
}

export const exposeApiToRenderer = (services) => {
  const exposedApi = {}
  Object.keys(services).forEach((service) => {
    exposedApi[service] = (...args) => ipcRenderer.invoke(service, ...args)
  })
  return exposedApi
}
