const { Router } = require("express");
const path = require("path")
const fs = require('fs'); 

const auth = require("../middleware/auth.js");
const Files = require("../models/files")

const router = Router();
router.use(auth);


router.get("/", async (req, res) => {
  const { userId } = req.body;
  try {
    const result = await Files.find({ "userId" : userId });
    

    res.status(200).send(result);
  } catch (err) {
    console.log(err);
  }
});



router.post("/download", async(req,res)=>{
  /* const {userId, link} = req.body;
  const filepath = path.join(__dirname, "../files/") + link;
  
  res.attachment(filepath) */
  /* const file = `${__dirname}/../files/${link}`;
  res.download(file); */
  const {link} = req.body;
  res.sendFile(path.join(__dirname, "../files/") + link)
  
})


module.exports = router;
