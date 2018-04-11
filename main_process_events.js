const { ipcMain } = require('electron');

ipcMain.on('test', (event, message) => {
  console.log('Received message from renderer process!:', message);
  event.sender.send('test-reply', 'got your message!');
});
