
'use strict'

import { app, protocol, BrowserWindow, ipcMain, Menu, Tray } from 'electron'
import { createProtocol } from 'vue-cli-plugin-electron-builder/lib'
import installExtension, { VUEJS_DEVTOOLS } from 'electron-devtools-installer'
const isDevelopment = process.env.NODE_ENV !== 'production'

const path = require('path');

// Scheme must be registered before the app is ready
protocol.registerSchemesAsPrivileged([
  { scheme: 'app', privileges: { secure: true, standard: true } }
])
//托盘对象
var appTray = null;

async function createWindow() {

  // Create the browser window.
  const win = new BrowserWindow({
    width: 1500,
    height: 950,
    minWidth: 543,
    minHeight: 495,
    maxWidth: 1500,
    maxHeight: 950,
    frame: false,
    resizable: true,
    transparent: true,
    webPreferences: {
      webSecurity: false,
      enableRemoteModule: true,
      // Use pluginOptions.nodeIntegration, leave this alone
      // See nklayman.github.io/vue-cli-plugin-electron-builder/guide/security.html#node-integration for more info
      nodeIntegration: process.env.ELECTRON_NODE_INTEGRATION,
      contextIsolation: !process.env.ELECTRON_NODE_INTEGRATION,
      allowRunningInsecureContent: false
    }
  })




  if (process.env.WEBPACK_DEV_SERVER_URL) {
    // Load the url of the dev server if in development mode
    await win.loadURL(process.env.WEBPACK_DEV_SERVER_URL)
    if (!process.env.IS_TEST) win.webContents.openDevTools()
  } else {
    createProtocol('app')
    // Load the index.html when not in development
    win.loadURL('app://./index.html')
  }


  ipcMain.on('minWindow', () => {
    win.minimize();
  })
  ipcMain.on('maxWindow', () => {
    win.isMaximized() ? win.unmaximize() : win.maximize()
  })
  ipcMain.on('closeWindow', () => {
    win.destroy();
  })


  app.whenReady().then(() => {
    var trayMenuTemplate = [
      {
        label: '打开',
        icon:process.env.NODE_ENV === 'development' ? 'build/icons/打开 (1).png' :  path.join(app.getAppPath(), 'icons/打开 (1).png'),
        click: () => {
          win.show();
        }
      },
      {
        label: '退出',
        icon:process.env.NODE_ENV === 'development' ? 'build/icons/退出 (1).png' :  path.join(app.getAppPath(), 'icons/退出 (1).png'),
        click: () => {
          win.destroy();
        }
      }
    ];
    // win.webContents.openDevTools()

    let iconPath = path.join(app.getAppPath(), 'icons/icon.ico');
    
    appTray = appTray = process.env.NODE_ENV === 'development' ? new Tray('build/icons/icon.ico') : new Tray(iconPath);


    //图标的上下文菜单
    const contextMenu = Menu.buildFromTemplate(trayMenuTemplate);
    //设置此托盘图标的悬停提示内容
    appTray.setToolTip('果汁番剧');
    //设置此图标的上下文菜单
    appTray.setContextMenu(contextMenu);
    //单击右下角小图标显示应用左键
    appTray.on('click', function () {
      win.show();
    })

    //右键
    appTray.on('right-click', () => {
      appTray.popUpContextMenu(trayMenuTemplate);
    });


  });



}



// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) createWindow()
})

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', async () => {
  if (isDevelopment && !process.env.IS_TEST) {
    // Install Vue Devtools
    try {
      await installExtension(VUEJS_DEVTOOLS)
    } catch (e) {
      console.error('Vue Devtools failed to install:', e.toString())
    }
  }
  createWindow()
})

// Exit cleanly on request from parent process in development mode.
if (isDevelopment) {
  if (process.platform === 'win32') {
    process.on('message', (data) => {
      if (data === 'graceful-exit') {
        app.quit()
      }
    })
  } else {
    process.on('SIGTERM', () => {
      app.quit()
    })
  }
}
