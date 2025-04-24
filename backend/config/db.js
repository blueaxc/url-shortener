const mongoose = require('mongoose')

const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
        }).then(() => console.log('MongoDB connected bro!'))
          .catch(err => console.log(err));
    }   catch (err) {
        console.log(err.message)
        process.exit(1);
    }
}

module.exports = connectDB;