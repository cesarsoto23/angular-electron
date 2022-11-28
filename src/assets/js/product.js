const {ipcRenderer} = require('electron');


function createProduct(nam,price,description){
  ipcRenderer.send('create-product',nam,price,description);
}

async function getProducts(){
  return await ipcRenderer.invoke('get-products');
}

function deleteProduct(id){
  ipcRenderer.send('delete-product',id);
}
