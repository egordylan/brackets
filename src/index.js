module.exports = function check(str, bracketsConfig) {
  let configToFind = '';
  let coeff = 1;

  while (coeff > 0 && str.length > 0) {
    coeff = 0;
    bracketsConfig.map(elem => {
      configToFind = elem.join('');
      if (str.includes(configToFind)) {
        str = str.replace(configToFind, '');
        coeff++;
      }
    }
    );
  }
  return (str.length === 0 ? true : false);
}
