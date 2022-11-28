const {app, BrowserWindow, ipcMain} = require('electron')
const url = require("url");
const path = require("path");
const { electron } = require('process');
const { PrismaClient } = require('@prisma/client');

    let mainWindow

    let prisma = new PrismaClient({
      datasources: {
          db: {
              url: `file:dev.db`,
          },
      },
    });

    function createWindow () {
      mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        autoHideMenuBar: true,
        webPreferences: {
          nodeIntegration: true,
          contextIsolation: false,
          enableRemoteModule: true,
        }
      })

      mainWindow.loadURL(
        url.format({
          pathname: path.join(__dirname, `/dist/electron-app/index.html`),
          protocol: "file:",
          slashes: true
        })
      );
      // Open the DevTools.
      mainWindow.webContents.openDevTools()

      mainWindow.on('closed', function () {
        mainWindow = null
      })
    }

    app.on('ready', createWindow)

    app.on('window-all-closed', function () {
      if (process.platform !== 'darwin') app.quit()
    })

    app.on('activate', function () {
      if (mainWindow === null) createWindow()
    })

ipcMain.on('create-product', async (event, name,price,description) => {
    await prisma.product.create({
        data: {
            name: name,
            price: price,
            description: description
        }
    });
})

ipcMain.handle('get-products', async (event,arg) => {
  result = await prisma.product.findMany({});
  return JSON.stringify(await prisma.product.findMany({}))

})

ipcMain.on('delete-product', async (event, id) => {
  await prisma.product.delete({
    where: {
      id: id
    }
  });
})
