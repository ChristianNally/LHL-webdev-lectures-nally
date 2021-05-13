const express = require('express');
const morgan = require('morgan');
// const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
const bcrypt = require('bcrypt');
const methodOverride = require('method-override');

const app = express();
const port = process.env.PORT || 8080;

// // middleware
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
app.use(morgan('dev'));
app.use(express.static('public'));

app.use(cookieSession({
  name: 'cookiemonster',
  keys: ['my secret key', 'yet another secret key']
}));

app.use(methodOverride('_method'));

// app.use((req, res, next) => {
//   if (req.query._method) {
//     req.method = req.query._method;
//     next();
//   }
// });

app.set('view engine', 'ejs');

// user database
const users = {
  jstamos: {
    username: 'jstamos',
    password: '$2b$10$7bOWn.DFgs9HkhzsTpuD1u6pReqRouddq.rO5xSKdWMZGXRehkS8e'
  },
  alice: {
    username: 'alice',
    password: '5678'
  }
};

// GET routes

app.get('/login', (req, res) => {
  res.render('login');
});

app.get('/register', (req, res) => {
  res.render('register');
});

app.get('/protected', (req, res) => {
  // const username = req.cookies.username;
  const username = req.session.username;

  if (!username) {
    return res.redirect('/login');
  }

  const user = users[username];
  if (!user) {
    return res.redirect('/register');
  }

  console.log('users:',users);
  res.render('protected', { user });
});

// app.get('*', (req, res) => {
//   res.redirect('/login');
// });

// // POST routes
// // PATCH /login
app.patch('/login', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const user = users[username];
  if (!user) {
    return res.status(401).send('No user with that username found');
  }

  bcrypt.compare(password, user.password)
    .then((result) => {
      if (result) {
        // res.cookie('username', user.username);
        req.session.username = user.username;
        res.redirect('/protected');
      } else {
        return res.status(401).send('Password incorrect');
      }
    });

});

app.post('/register', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  bcrypt.genSalt(10)
    .then((salt) => {
      return bcrypt.hash(password, salt);
    })
    .then((hash) => {
      users[username] = {
        username,
        password: hash
      };
      console.log(users);
      res.redirect('/login');
    });
});

app.post('/logout', (req, res) => {
  // res.clearCookie('username');
  req.session = null;
  res.redirect('/login');
});

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
