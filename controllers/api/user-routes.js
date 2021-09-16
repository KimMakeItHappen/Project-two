const router = require('express').Router();
const { User } = require('../../models');

router.post('/', async (req, res) => {
  try {
    const userData = await User.create(req.body);

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      
      res.json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;


// const router = require('express').Router();
// const { User, Jobposting, Comment } = require('../../models');

// router.get('/:id', (req, res) => {
//     User.findOne({
//             attributes: { exclude: ['password'] },
//             where: {
//                 id: req.params.id
//             },
//             include: [{
//                     model: Jobposting,
//                     attributes: [
//                         'id',
//                         'title',
//                         'content',
//                     ]
//                 },
//                 {
//                     model: Comment,
//                     attributes: [
//                         'id', 
//                         'content', 
//                         'created_at'
//                     ],
//                     include: {
//                         model: Jobposting,
//                         attributes: ['title']
//                     }
//                 },
//                 {
//                     model: Jobposting,
//                     attributes: ['title'],
//                 }
//             ]
//         })
//         .then(dbUserData => {
//             if (!dbUserData) {
//                 res.status(404).json({ message: 'No user found with this id' });
//                 return;
//             }
//             //res.json(dbUserData);
//             //res.render("component", { dataname: res.json(data)})
//         })
//         .catch(err => {
//             console.log(err);
//             res.status(500).json(err);
//         });
// });

// router.post('/', (req, res) => {
//     User.create(
//         req.body
//     )
//         .then(dbUserData => {
//             req.session.save(() => {
//                 req.session.user_id = dbUserData.id;
//                 req.session.username = dbUserData.username;
//                 req.session.loggedIn = true;

//                 res.json(dbUserData);
//             });
//         })
//         .catch(err => {
//             console.log(err);
//             res.status(500).json(err);
//         });
// });


// // This is the login route
// router.post('/login', async (req, res) => {
//     User.findOne({
//         where: {
//             username: req.body.username
//         }
//     }).then(dbUserData => {
//         if (!dbUserData) {
//             res.status(418).json({ message: 'No user found with this username.' });
//             return;
//         }
//         const validPassword = dbUserData.checkPassword(req.body.password);

//         if (!validPassword) {
//             res.status(418).json({ message: 'Incorrect password.' });
//             return;
//         }
//         req.session.save(() => {
//             req.session.user_id = dbUserData.id;
//             req.session.username = dbUserData.username;
//             req.session.loggedIn = true;

//             res.json({ user: dbUserData, message: 'You are now logged in!' });
//         });
//     })
//         .catch(err => {
//             console.log(err);
//             res.status(500).json(err);
//         });
// });
// // Log out route
// router.post('/logout', (req, res) => {
//     if (req.session.loggedIn) {
//         req.session.destroy(() => {
//             res.status(204).end();
//         });
//     }
// });

// module.exports = router;