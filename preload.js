
const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld(
	'api', {
	  node: () => process.versions.node,
	  chrome: () => process.versions.chrome,
	  electron: () => process.versions.electron,
	  os:()=>require('os'),
	  send:(channel, data) => {
				ipcRenderer.send(channel, data); 
        },
      receive:(channel, data) => {
  				ipcRenderer.on(channel,data);
        },
	  
	}
);

