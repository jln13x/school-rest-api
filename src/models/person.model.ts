import mongoose from "mongoose";

const personSchema = new mongoose.Schema({
  name: {
    type: String,
  },
});

export default mongoose.model("Person", personSchema);
