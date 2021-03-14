module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let turns = 2**disksNumber - 1;
  return {
    turns,
    seconds: Math.floor(turns / (turnsSpeed / 60 / 60))
  }
};
