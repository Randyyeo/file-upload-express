const { Router } = require("express");

const auth = require("../middleware/auth.js");
const files = require("../models/files.js")
const router = Router();
router.use(auth)

router.post("/", async (req, res) => {
  const { userId } = req.body;
  if (req.files){
    var file = req.files.file
    var filename = file.name
    
    file.mv(__dirname + "../files/" + filename, function(err){
      if (err){
        res.status(500).send(err)
      } else {
        res.status(201).send("File uploaded");
      }
    })
  }  
});

router.post("/db", async (req,res)=>{
  const { userId, filename, date, name, time } = req.body;
  console.log(req.body)
  try {
    console.log("HELLO")
    const result = await files.create({
      name,
      filename,
      date,
      time,
      userId,
    });
    
    
    res.status(201).send("Successfully uploaded")
  } catch (error) {
    res.status(500).json({message:"Error has occured"})
  }
  
})




module.exports = router;
