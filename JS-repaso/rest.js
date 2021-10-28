// siempre debe ser el ultimo parametro el operador rest
const rest = (a, ...argumentos) => {
  console.log(a);
  console.log(argumentos);
};

rest(1, 2, 3);

const obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
};

// destructuring
// const { a, b, ...restobj } = obj;
// console.log(a, b, restobj);

const arr = [1, 2, 3, 4, 5];
const [a, b, ...r] = arr;

const useState = () => ["valor", () => {}];

const [valor, setValor] = useState();
console.log(valor, setValor);
