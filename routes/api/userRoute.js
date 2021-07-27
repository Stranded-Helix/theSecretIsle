const User = require("../../models/User");
const router = require("express").Router();
const bcrypt = require("bcrypt");


router.post("/login", async (req, res) => {

    try {
        const userFound = await User.findOne({userName: req.body.username})
       

        if (userFound) {
            const checkPassword = await bcrypt.compare(req.body.password, userFound.password)
            
            if (!checkPassword) {
                res.status(401).json("Incorrect Password")
            }
            else {
                document.location.replace('/story');
                req.session = {
                    isLoggedIn: true
                }

                res.status(200).json("Logged in") 
            }
        } else { 
            res.status(404).json("User not found")
        }
        
    } catch(error) {
        console.log("login route" + error)
    }
})


//     try {
//         const user = await User.find({ "userName": req.body.email })
//         if (user) {
//             let firstUser = user[0];
//             //very basic password check no hashing
//             if (req.body.password == firstUser.password) {
//                     // req.session.username = firstUser.userName;
//                     // req.session.logged_in = true;   
//                 res.status(200).json("Logged in")
//             } else {
//                 res.status(401).json("Incorrect User or Password");
//             }
//         } else {
//             res.status(404).json("User not found");
//         }
//     } catch (err) {
//         res.status(500).json(err);
//     }

// });

router.post("/update/:id", async (req, res) => {
        try {
            const questionUser = await User.find({ "userName": req.session.userName })
            if (questionUser) {
                questionUser.lastQuestion = req.params.id;
                res.status(200).json("lastQuestion updated")
            } else {
                res.status(404).json("User not found");
            }
        } catch (err) {
            res.status(500).json(err);
        }
    
    });

router.get("/question", async (req, res) => {
    try {
        const user = await User.find({"userName" : req.session.userName})
        if(user) {
            
            res.json({
                lastQuestion: user.lastQuestion,
                score: user.Score
            })
        }
    } catch (err) {
        res.json(err);
    }
})

router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
      req.session.destroy(() => {
        res.status(204).end();
      });
    } else {
      res.status(404).end();
    }
  });

router.post("/signup", async (req, res) => {

    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);

        const createdUser = await User.create({
            userName: req.body.username,
            password: hashedPassword,
        });

        res.send(createdUser);

        req.session = {
          isLoggedIn: true,
        }
      } catch (error) {
        console.log("Signup Route" + error);
      }
})

router.get('/', (req, res) => {
    res.status(200).send(req.session.user_id)
});

module.exports = router;




