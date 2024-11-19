import express from 'express';
import { StudentController } from './student.controller';
const router = express.Router();

//will call controller
router.post('/create-student', StudentController.createStudent);

export const StudentRoutes = router;