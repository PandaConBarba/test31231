const memberForm = document.getElementById('memberForm');


const{remote} = require ('electron')
const main = remote.require('./main.js')


const membersname = document.getElementById('name');
const memberslname = document.getElementById('lname');
const memberscodigo= document.getElementById('codigo');
const memberscargo = document.getElementById('cargo');
const memberssexo = document.getElementById('sexo');
const membersfechai = document.getElementById('fechai');
const membersdireccion = document.getElementById('direccion');

memberForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const Newmembers = {
    name: membersname.value,
    lname: memberslname.value,
    codigo: memberscodigo.value,
    cargo: memberscargo.value,
    sexo: memberssexo.value,
    fechai: membersfechai.value,
    direccion: membersdireccion.value
  }



 main.crear(Newmembers);

})





