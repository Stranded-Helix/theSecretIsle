const Prompt  = require("../../models/Prompt");

const router = require("express").Router();

router.get('/', function (req,res){
    Prompt.find({})
    .then(data => {
        res.json(data)
    })
    .catch(err => {
        console.error(err)
    })
});

router.get('/:id', async (req, res) => {
    try {
    const promptData = await Prompt.find({promptNum: req.params.id});
    if(promptData) {
        res.json(promptData);
    }
    } catch (err) {
        res.status(500).json(err);
    }


})

module.exports = router;