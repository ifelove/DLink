const mongoose = require("mongoose")

const connectDb = async (url) => {
    
    return await mongoose.connect(url).then(() => { console.log("connected to  site db") })
}


module.exports = connectDb        