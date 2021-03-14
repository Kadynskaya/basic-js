module.exports = function createDreamTeam(members) {
  let newMembers = [];
  if(Array.isArray(members)) {
    members.map(member => typeof member === 'string' ? newMembers.push(member) : false);
    return [...newMembers.map(item => item.split(' ').join('')[0].toUpperCase()).sort()].join('');
  } else {
    return false;
  }  
};
