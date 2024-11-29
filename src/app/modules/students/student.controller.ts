import { Request, Response } from 'express';
import { StudentService } from './student.service';
import studentValidationSchema from './student.validation';
// import { studentValidationSchema } from './student.joi.validation';

const createStudent = async (req: Request, res: Response) => {
  try {

    const { student: studentData } = req.body;


    //data validation using zod


    const zodparsedData = studentValidationSchema.parse(studentData)

    // console.log(studentData);
    // 

    const result = await StudentService.createStudentIntoDB(zodparsedData);
    res.status(200).json({
      success: true,
      message: 'Student is created succesfylly',
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'Somting is worning',
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
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'Somting is worning',
      error: err,
    });
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
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'Somting is worning',
      error: err,
    });
  }
};

const deletedStudent = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;
    const result = await StudentService.deletedStudent(studentId);
    res.status(200).json({
      success: true,
      message: 'Student is Deleted succcessfully',
      data: result,
    });
  } catch (err : any) {
    res.status(500).json({
      success: false,
      message: err.message || 'Somting is worning',
      error: err,
    });
  }
}

export const StudentController = {
  createStudent,
  deletedStudent,
  getAllStudents,
  getSingleStudent,
};
