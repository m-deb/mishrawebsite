const mongoose = require("mongoose");

//creating a databases.

mongoose.connect("mongodb://localhost:27017/ananddynamic", {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("connection successful");
}).catch(() => {
    console.log("error");
})