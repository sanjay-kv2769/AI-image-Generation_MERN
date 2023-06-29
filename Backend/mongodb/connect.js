import mongoose from "mongoose";

const connectDB = (url) => {
  mongoose.set("strictQuery", true);
  mongoose
    .connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("connected to MongoDB"))
    .catch((err) => {
      console.error("failed to connect with mongo");
      console.error(err);
    });
};

export default connectDB;
