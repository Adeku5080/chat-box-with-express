const mongoose = require("mongoose")
const dbName ="chatbot"

const connect = (URI) => {
  mongoose
    .connect(URI,{autoIndex : false})
    .then(() => console.log(`connected to ${dbName} DB`))
    .catch((err) => console.log(err));
};

module.exports = connect;
