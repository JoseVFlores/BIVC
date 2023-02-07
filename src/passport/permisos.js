const User = require('../models/user');


/*const accesos = async (req,res) =>{

const {email, permisos} = req.body;


const lista = await User.findOne({'email': email},{permisos:1});

console.log(lista);

const user = await User.findOne({'email': email});
console.log(user);

}*/

const permisos = async (req,res)=> {

 const {email} = req.body;

 const lista = await User.findOne({'email': email},{permisos:1});
 console.log(lista);

 const user = await User.findOne({'email': email});
 console.log(user);
}

