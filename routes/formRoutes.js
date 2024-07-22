import express from 'express';
import { addForm, deleteForm, getForm, getFormById, updateForm } from '../controllers/formController.js'; 

const router = express.Router();
router.post('/create-form', addForm);
router.get('/get-form', getForm);
router.get('/get-form/:id', getFormById);
router.delete('/delete-form/:id', deleteForm);
router.put('/update-form/:id', updateForm);
export default router; 
