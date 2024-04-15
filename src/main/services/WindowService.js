import { BrowserWindow } from 'electron'

export const windowServices = {
  windowMinimze: async (_event) => {
    const focusedWindow = BrowserWindow.getFocusedWindow()
    if (focusedWindow) {
      focusedWindow.minimize()
    }
  },
  windowMaximize: async (_event) => {
    const focusedWindow = BrowserWindow.getFocusedWindow()
    if (focusedWindow) {
      if (focusedWindow.isMaximized()) {
        focusedWindow.unmaximize()
      } else {
        focusedWindow.maximize()
      }
    }
  },
  windowClose: async (_event) => {
    const focusedWindow = BrowserWindow.getFocusedWindow()
    if (focusedWindow) {
      focusedWindow.close()
    }
  }
}
