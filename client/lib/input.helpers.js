validatePassword = function(password, confirmPassword) {
  var errors = [];

  if(password != confirmPassword) {
    errMsg.push("Passwords do not match");
  }

  // if (password.length < 7) {
  //   errMsg.push("7 character minimum password length");
  // }

  // if (password.search(/[a-z]/i) < 0) {
  //   errMsg.push("Password requires 1 letter.");
  // }

  // if (password.search(/[0-9]/) < 0) {
  //   errMsg.push("Password must have at least one digit.");
  // }

  return errors;
};