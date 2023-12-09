import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {

    mongoose.set('strictQuery', true);

    if(isConnected) {
        cnsole.log("=> using existing database connection");
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "share_prompt",
            useNewUrlParser: true,
            useUnifiedTopology: true,
    })
    isConnected = true;
    cnsole.log("MongoDB connected");
    }catch(err) {
        console.log(err);
    }
}