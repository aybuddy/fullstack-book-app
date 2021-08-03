require('dotenv').config()
const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true
    })

    console.log('>>>>>> Database connection SUCCESS >>>>>>')
  } catch (error) {
    console.log('>>>>>> Database connection FAIL >>>>>>')
    process.exit(1)
  }
}

module.exports = connectDB