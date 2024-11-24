import { Request, Response } from 'express';
import { StudentService } from './student.service';
import Joi from 'joi';

const createStudent = async (req: Request, res: Response) => {
  try {

    const JoivalidationSchema = Joi.object({
        id: Joi.string(),
        name: {
          firstName: Joi.string().max(20).required(),
          middleName: Joi.string().max(20),
          lastName: Joi.string().max(20)
        },
    
    });
    const { student: studentData } = req.body;
    console.log(studentData);
    const result = await StudentService.createStudentIntoDB(studentData);
    res.status(200).json({
      success: true,
      message: 'Student is created succesfylly',
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Somting is worning',
      error: err,
    });
  }
};

const getAllStudents = async (req: Request, res: Response) => {
  try {
    const result = await StudentService.getAllStudentFromDB();
    res.status(200).json({
      success: true,
      message: 'Student are retrieved succcessfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const getSingleStudent = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;
    const result = await StudentService.getSingleStudent(studentId);
    res.status(200).json({
      success: true,
      message: 'Student is retrieved succcessfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

export const StudentController = {
  createStudent,
  getAllStudents,
  getSingleStudent,
};
