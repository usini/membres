const { contextBridge, ipcRenderer } = require('electron/renderer')

contextBridge.exposeInMainWorld('application', {
    close: () => ipcRenderer.invoke('close')
})