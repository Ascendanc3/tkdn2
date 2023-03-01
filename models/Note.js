// import mongoose
import mongoose from "mongoose";
// Buat Schema
const Note = mongoose.Schema({
  notes: {
    type: String,
    required: true,
  }
});

export default mongoose.model("Notes", Note);
