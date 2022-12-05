const mongoose = require ("mongoose");

mongoose.connect("mongodb://localhost:27017/web-db", {
}).then(() =>{
    console.log(`connection DB successful`)
}).catch((e) => {
    console.log(`no connection`)
})