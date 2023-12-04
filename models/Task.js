import mongoose from "mongoose";

mongoose.connect(process.env.MONGO_URI);
mongoose.Promise = global.Promise;

const { Schema } = mongoose;
const taskSchema = new Schema(
  {
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    date:{
      type:String,
    }
  },
  { timestamps: true }
);

export default mongoose.models.Task || mongoose.model("Task", taskSchema);
