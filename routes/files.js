const { Router } = require("express");
const path = require("path")
const fs = require('fs'); 

const router = Router();

router.get("/", async(req,res)=>{
  /* const {userId, link} = req.body;
  const filepath = path.join(__dirname, "../files/") + link;
  
  res.attachment(filepath) */
  /* const file = `${__dirname}/../files/${link}`;
  res.download(file); */
  console.log(req.query)
  const {link} = req.query;
  console.log(link)
  res.sendFile(path.join(__dirname, "../files/") + link)
  
})


module.exports = router;
