const duplicatedArray = [1, 5, 6, 5, 7, 1, 6, 8, 9, 7];
let distinctArray = duplicatedArray.reduce((accum, curr) => {
  if (!accum.includes(curr)) {
    accum.push(curr)
    // return accum;
  }
  return accum;
}, []);
console.log(distinctArray);
