// expresion de clase anonima
//const Rectangulo = class{};
// expresion de clase
// const Rectangulo = class R {};
// declaracion de clase
// clases declaradas con class no tienen hoisting
class Rectangulo {}
// console.log(Cuadrado);
//Al declarar una funcion con function pasa los mismo que con var, osea hoisting
//Hoisting
//cuando tomamos variables definidas con var
//y funciones definidas con function
//y las lleva al inicio el archivo
function Cuadrado() {}
// console.log(Cuadrado, Rectangulo);
const r = new Rectangulo();

class Chancho {
  // se ejecuta cada vez que se llama con new
  propiedad = "mi propiedad";
  #hambre; // variable privada
  constructor(estado = "feliz", hambre = false) /*default*/ {
    this.estado = estado;
    this.#hambre = hambre;
  }
  hablar() {
    console.log(
      `soy un chancho ${this.estado} ${
        this.#hambre ? "con mucha hambre" : "satisfecho!"
      }`
    );
  }
  // static no acceden a las propiedades porque estas son parte de las instancias
  static comer() {
    console.log("estoy comiendo");
  }
}
// no podemos instanciar una clase sin la palabra new
Chancho.comer();
const feliz = new Chancho("feliz");
feliz.hablar();
const triste = new Chancho("triste");
triste.hablar();
const nose = new Chancho();
nose.hablar();
