module.exports = function repeater(str, options) {
  let newAddition = '';
  let result = '';
  if(options.additionRepeatTimes){
    for(let i = 1; i < options.additionRepeatTimes; i++) {
      newAddition += `${options.addition}${options.additionSeparator ? options.additionSeparator : '|'}`;
    }
    newAddition += options.addition;
  } else if(!options.additionRepeatTimes && options.addition) {
    newAddition += options.addition;
  }
  if(options.repeatTimes) {
    for(let i = 1; i < options.repeatTimes; i++) {
      result += `${str}${newAddition}${options.separator ? options.separator : '+'}`
    }
    result += `${str}${newAddition}`
  } else {
    result += `${str}${newAddition}`
  }
  return result;
};
