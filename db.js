import mongoose from 'mongoose';

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser:true,
            useUnifiedTopology:true
        });
        console.log("monogo connection successful");
    } catch (error) {
        throw new Error("error in connection to mongodb")
        
    }
}

export default connect;