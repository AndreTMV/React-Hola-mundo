// al declarar una funcion con new se va a ignorar el return y se va  convertir en return this, this es la funcion
// this es la funcion
// funciones que se declaran con la palabra reservada function
// las funciones declaradas con function pueden ser tambien clases en js
function Fn() {
  this.prop = "propiedad";
  return "Hola mundo";
}
Fn.prototype.lala = function FuncionDePrototipo() {};

const variable = new Fn();
console.log(variable.__proto__);

// fat arrow function
// no pueden ser llamadas con la palabra reserveda new
const fatFn = () => {
  // No tienen contexto de this !!!
  this.prop = "propiedad";
  console.log(this);
  return "Hola mundo";
};

const r1 = fatFn();
console.log(r1);

// return implicito
const fnR = () => 2;
// ^^^
// |||
// same as:
// const fnR = () =>{
//  return 2;
// }
console.log(fnR());
