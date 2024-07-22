import Form from "../models/formModel.js";
export const addForm = async (req, res) => {
  try {
    const { title, inputs } = req.body;
    if (!title || !inputs) {
      return res.status(400).json({success:false, error: 'Title and inputs are required' });
    }
    const newForm = new Form({
      title,
      inputs
    });
    await newForm.save();
    res.status(201).json({success:true, message: 'Form added successfully', form: newForm });
  } catch (error) {
    console.error('Error adding form:', error);
    res.status(500).json({ error: 'Server error' });
  }
};

export const getForm = async (req, res) => {
  try {
    const forms= await Form.find({});
    res.status(201).json({success:true, message: 'Form Fetched successfully', forms });
  } catch (error) {
    console.error('Error adding form:', error);
    res.status(500).json({ error: 'Server error' });
  }
};

export const deleteForm = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedForm = await Form.findByIdAndDelete(id);
    
    if (!deletedForm) {
      return res.status(404).json({ success: false, error: 'Form not found' });
    }

    res.status(200).json({ success: true, message: 'Form deleted successfully', form: deletedForm });
  } catch (error) {
    console.error('Error deleting form:', error);
    res.status(500).json({ error: 'Server error' });
  }
};

export const updateForm = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, inputs } = req.body;
    if (!title || !inputs) {
      return res.status(400).json({ success: false, error: 'Title and inputs are required' });
    }
    const updatedForm = await Form.findByIdAndUpdate(
      id,
      { title, inputs },
      { new: true } 
    );

    if (!updatedForm) {
      return res.status(404).json({ success: false, error: 'Form not found' });
    }
    res.status(200).json({ success: true, message: 'Form updated successfully', form: updatedForm });
  } catch (error) {
    console.error('Error updating form:', error);
    res.status(500).json({ error: 'Server error' });
  }
};

export const getFormById = async (req, res) => {
  try {
    const { id } = req.params;
    const form = await Form.findById(id);

    if (!form) {
      return res.status(404).json({ success: false, error: 'Form not found' });
    }

    res.status(200).json({ success: true, message: 'Form fetched successfully', form });
  } catch (error) {
    console.error('Error fetching form by ID:', error);
    res.status(500).json({ error: 'Server error' });
  }
};
