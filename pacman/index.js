'use strict';

//index.js(main proccess)
const electron = require('electron');
const app = electron.app;
const BrowserWindow  = electron.BrowserWindow;
const Menu = electron.Menu;
const dialog =electron.dialog;
const ipcMain = electron.ipcMain;

let mainWindow;
let settingsWindow;
// let backgroundColor = 'skyblue';
let menuTemplate = [{
    label:'pacman',
    submenu:[
        { label:'About',accelerator: 'CmdOrCtrl+Shift+A', click: function(){showAboutDialog(); } } ,
        { type:'separator'},
        { label:'Settings',accelerator: 'CmdOrCtrl+,', click: function(){showSettingsWindow(); } } ,
        { type:'separator'},
        { label: 'Quit',accelerator: 'CmdOrCtrl+Q', click: function(){app.quit(); } }
    ]
}];
let menu = Menu.buildFromTemplate(menuTemplate);

ipcMain.on('settings_changed',function(event,color){
    mainWindow.webContents.send('set_bgcolor',color);
    //console.log(color);
});

// ipcMain.on('bgcolor_changed',function(event,color){
//     backgroundColor = color;
// });

// ipcMain.on('get_bgcolor', function(event){
//     event.returnValue = backgroundColor;
// });

function showAboutDialog(){
    dialog.showMessageBox({
        type:'info',
        buttons:['OK'],
        message:'About This Pacman',
        detail:'This App is Pacman!!'
    });
}
function showSettingsWindow(){
    settingsWindow = new BrowserWindow({width: 500 ,height:400});
    settingsWindow.loadURL('file://' + __dirname + '/settings.html');
    // settingsWindow.webContents.openDevTools();
    //devツール
    settingsWindow.show();
    settingsWindow.on('closed',function(){
        settingsWindow =null;
    });
}


function createMainWindow(){
    Menu.setApplicationMenu(menu);
    mainWindow = new BrowserWindow({width: 500 ,height:400});
    mainWindow.loadURL('file://' + __dirname + '/index.html');
    // mainWindow.webContents.openDevTools();
    //devツール
    mainWindow.on('closed',function(){
        mainWindow =null;
    });
}
app.on('ready',function(){
    createMainWindow();
});

app.on('window-all-closed',function(){
    if(process.platform !== 'darwin'){
        app.quit();
    }
});

app.on('activate',function(){
    if(mainWindow === null){
        createMainWindow();
    }
});
