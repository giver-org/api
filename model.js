const user = { id: 0, firstName: 'Dylan', lastName: 'Landry', age: '25', };

function getUser(id) {
  user.id = id;
  return user;
}

module.exports = {
  getUser,
};
