import mongoose from 'mongoose';

// Define the schema for form inputs
const inputSchema = new mongoose.Schema({
  type: { type: String, required: true },
  title: { type: String },
  placeholder: { type: String }
});

// Define the schema for the form
const formSchema = new mongoose.Schema({
  title: { type: String, required: true },
  inputs: [inputSchema]
});

const Form = mongoose.model('Form', formSchema);

export default Form;
