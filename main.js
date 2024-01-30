// Modules to control application life and create native browser window
const {app, BrowserWindow, Menu, MenuItem, ipcMain, dialog} = require('electron')
const path = require('path')
const fs = require('fs')
const os_system = require('os')
/*
require('electron-reload')(__dirname, {
    // Note that the path to electron may vary according to the main file
    electron: require(`${__dirname}/node_modules/electron`)
})*/
const mysql = require('mysql');


//https://lenguajejs.com/javascript/modulos/export/
//https://www.npmjs.com/package/mysql#connection-options

const {BD_Mysql} = require('./msql_connection');


const config = {
  host: 'localhost',
  user: 'root',
  password: 'Serverprueba',
  database: 'MiniStock'
};

/*
let MySql_DB = new BD_Mysql(config)

MySql_DB.Create_table()
*/
/******************************************************************************/

let mainWindow

function createWindow () {

		  mainWindow = new BrowserWindow({
		    width: 800,
		    height: 600,
		    webPreferences: {
			 nodeIntegration:false, //false
		      preload:path.join(__dirname, 'preload.js')
		    }
		    
		    
		  })
		  

		  // and load the index.html of the app.
		  mainWindow.loadFile('index.html')

		  // Open the DevTools.
		     mainWindow.webContents.openDevTools()


		  mainWindow.on('closed', function () {

		   mainWindow = null  })

}


/*solicitudes**/
/*
ipcMain.on("show-data-get",(event,data)=>{


		MySql_DB.Show_data((err, result) => {

			if (err) {
				console.error('Error al ejecutar la consulta:', err);
			} else {
				
				mainWindow.send("show-data-send",result);
			}

		})	
})

/*----------------------------------------------------*/
/*
ipcMain.on("Search-data",(event,data)=>{


		MySql_DB.Search_data(data,(err, result) => {

					if (err) {
						console.error('Error al ejecutar la consulta:', err);
					} else {
						
						console.log("Save data",result);

						mainWindow.send("show-data-send",result)


					}
		})

})
*/
/***************************************************/

/*
ipcMain.on("search_id_update",(event,id)=>{


		MySql_DB.Search_id(id,(err, result) => {

					if (err) {
						
						console.error('Error al ejecutar la consulta:', err);

					} else {
						
						console.log("Id Search ",result);
						mainWindow.send("send-search-id",result)


					}
		})


})
*/
/***************************************************/
/*
ipcMain.on("New-data",(event,data)=>{

		
		console.log("New",data)

		MySql_DB.New_data(data,(err, result) => {

					if (err) {
						console.error('Error al ejecutar la consulta:', err);
					} else {
						console.log("Save data");


					}
		})
})
*/
/**********************************************/
/*
ipcMain.on("Update-data",(event,data)=>{

console.log("update ",data)

		MySql_DB.Update_data(data,(err, result) => {

					if (err) {
						console.error('Error al ejecutar la consulta:', err);
					} else {
						console.log("Save data",result);

					}
		})

})
/**********************************************/
/*
ipcMain.on("Delet-data",(event,data)=>{

	console.log(data)

	MySql_DB.Delet_data(data.id,data.code)



})
*/
/*
ipcMain.on("modalcerrada",(event,data)=>{

	console.log("modalcerrada")


})
*/
/************************************************************/
/*
ipcMain.on("generate-qr-code-send",(event,id)=>{


			MySql_DB.Search_id(id,(err, result) => {

					if (err) {
						
						console.error('Error al ejecutar la consulta:', err);

					} else {
						
						console.log("Id Search ",result);
						mainWindow.send("generate-qr-get",result)
					}
		})

})
*/
/*********************************************************/
*/*
ipcMain.on("info-send",(event,id)=>{


			MySql_DB.Search_id(id,(err, result) => {

					if (err) {
						
						console.error('Error al ejecutar la consulta:', err);

					} else {
						
						console.log("Id Search ",result);
						mainWindow.send("info-get",result)


					}
		})



})


/*-------------------------------------------------------------------------*/
app.on('ready', createWindow )
	//Menu.setApplicationMenu(null))


app.on('window-all-closed', function () {
  
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function () {
  
  if (mainWindow === null) createWindow()
	   
})

ipcMain.on('message',(event,arg) => {   
	console.log("sms recived",arg);
	});
	

