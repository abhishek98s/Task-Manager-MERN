import mongoose from "mongoose"


mongoose.set('strictQuery', false);

const connectDB = (url) => {
    return mongoose.connect(url)
        .then(() => console.log("Connected to the database"))
        .catch((err) => console.log(err));
}

export default connectDB;