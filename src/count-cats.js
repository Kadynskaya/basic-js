module.exports = function countCats( matrix ) {
  let sum = 0;
  matrix.map(subarrs => subarrs.map(item => item == '^^' ? sum++ : ''));
  return sum;
};
