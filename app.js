const express = require("express");
const cors = require("cors");
const db = require("./database");
const mongoose = require("mongoose");
const upload = require("express-fileupload")

const app = express();
const findRoute = require("./routes/find");
const addRoute = require("./routes/add");
const authRoute = require("./routes/middleware");
const usersRoute = require("./routes/users");
const filesRoute = require("./routes/files")

app.disable('x-powered-by');
app.use(cors());
app.use(upload())

app.use(express.urlencoded({ extended: false }));
app.use(express.json({ limit: "50mb" }));

app.use((req, res, next) => {
  console.log(`${req.method} - ${req.url}`);
  next();
});

app.use("/find", findRoute);
app.use("/auth", authRoute);
app.use("/add", addRoute);
app.use("/users", usersRoute);
app.use("/files", filesRoute);

const url = db.url
mongoose.connect(url, {useUnifiedTopology: true,  useNewUrlParser: true});
mongoose.connection.on("connected", () => {
    console.log("Connected to MongoDB")
})

app.listen(process.env.PORT || 4000, console.log("Running this app on 4000"));
