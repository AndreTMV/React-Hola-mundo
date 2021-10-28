const chanchosFelices = ["chancho 1", "chancho 2", "chancho 3"];
/*export*/ const chanchosTristes = ["triste 1", "triste 2"];
/*export*/ const otrosChanchos = ["chancho 1"];

// module.exports = {
//   chanchosTristes,
//   chanchosFelices,
// };

const fn1 = () => {
  console.log("soy la funcion 1");
};

function fn2() {
  console.log("soy la funcion 2");
}
export { chanchosTristes, otrosChanchos, fn1, fn2 };
export default chanchosFelices;
