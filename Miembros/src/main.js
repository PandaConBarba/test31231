const { BrowserWindow, Tray} = require("electron");
const {getConnection} = require('./database')




async function crear(nums){
  console.log(nums);
  console.log(JSON.stringify(nums));

  try {
    const conn = await getConnection();
    const resultado =  await conn.run('INSERT INTO miembro (Nombre,Apellido,Codigo,Cargo,Sexo,F_Ingreso,Direccion) values(?,?,?,?,?,?,?)',)
    
   
    
    
    /*
    (nmembersname,memberslname,memberscodigo,memberscargo,memberssexo,membersfechai,membersdireccion)
    (Nombre,Apellid,Codigo,Sexo,F_inicio,Direccion)
  */
  
    console.log(resultado) 
  
    
  } catch (error) {
    console.log(error)
  }


}
  
let window; 



function createWindow() {
  window = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  window.loadFile("src/ui/index.html");
}

module.exports = {
  createWindow,
  crear
  }

