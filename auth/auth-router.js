const router = require('express').Router();
const bcrypt = require('bcryptjs');
const Users = require('../users/users-model');
const jwt = require('jsonwebtoken');


router.post('/register', async(req, res) => {
    try {
      const { username, password, user_type, country} = req.body;
      //gets these items from the request
      const hash = bcrypt.hashSync(password, 10); 
        //sets the hash for encrypting the password
      const user = { username, password: hash, user_type, country};
      //sets the user to be the username and a hashed password
      const addedUser = await Users.add(user);
      res.json(addedUser);
      //adds the user into the database
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

  router.post('/login', (req, res) => {
    const { username, password } = req.body;
    function isValid(user) {
      return Boolean(user.username && user.password && typeof user.password === "string");
    }
    if (isValid(req.body)) {
      Users.findBy({ username: username })
        .then(([user]) => {
            const usertype = user.user_type;
            const userid = user.id;
          if (user && bcrypt.compareSync(password, user.password)) {
            const token = makeToken(user)
            // make token
            res.status(200).json({ message: "You have successfully logged in heres a token for you: ", token, usertype, userid}); // send it back
          } else {
            res.status(401).json({ message: "Invalid Login" });//tell them the login is bad
          }
        })
        .catch(error => {
          res.status(500).json({ message: error.message });//for other various errors
        });
    } else {
      res.status(400).json({
        message: "please provide username and password and the password shoud be alphanumeric",
      });
    }
  });
  const { jwtSecret } = require('./secret.js');

  //the below function is what makes the token for the user
function makeToken(user) {
  const payload = {
    subject: user.id,
    username: user.username,
    role: user.role,
    foo: 'bar',
  };
  const options = {
    expiresIn: '15 minutes',
  };
  return jwt.sign(payload, jwtSecret, options);
}

module.exports = router;