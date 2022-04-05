const mongoose = require("mongoose");

const connectDB = async () => {

    console.log(process.env.MONGO_URI)

  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit();
  }
};

module.exports = connectDB;
