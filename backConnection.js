const mongoose = require("mongoose");

const DB =
  "mongodb+srv://Stark:<Password>@task5.7zm3ddj.mongodb.net/USERS?retryWrites=true&w=majority";

const backConnect = mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB is connected");
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = backConnect;
