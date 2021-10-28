const arr = [-5, -1, -2, -3, -4];
// filtra elementos
const resultado = arr.filter((elemento, indice) => {
  // console.log(indice);
  return elemento > 2;
});
const res = arr.filter((elemento) => elemento > 2);
// console.log(resultado);

// a cada elemento lo cambia segun lo que haga la funcion
// const mapped = arr.map((elemento) => elemento * 2);
// console.log(mapped);

const users = [
  { id: 1, name: "Chanchito feliz" },
  { id: 2, name: "Chanchito triste" },
  { id: 3, name: "Chanchito emocionado" },
  { id: 4, name: "Andre" },
];
const mapped = users.map((user) => `<h1>${user.name}</h1>`);
// console.log(mapped);

// const r1 = arr.reduce((acumulador, elemento) => acumulador + elemento, 0);
// const getMax = (a, b) => Math.max(a, b);
// const r1 = arr.reduce(getMax);
// const r1 = users.reduce(
//   (acumulador, elemento) =>
//     `${acumulador === "" ? "" : `${acumulador}, `},${elemento.name}`,
//   ""
// );

const r1 = users.reduce((acc, el) => {
  if (el.id < 2) {
    return acc;
  }
  return acc.concat(el);
}, []);

console.log(r1);
