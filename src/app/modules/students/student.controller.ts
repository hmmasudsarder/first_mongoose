import { Request, Response } from 'express';
import { StudentService } from './student.service';

const createStudent = async (req: Request, res: Response) => {
  try {
    const {student: studentData} = req.body;
    console.log(studentData)
    const result = await StudentService.createStudentIntoDB(studentData);
    res.status(200).json({
      success: true,
      message: 'Student is created succesfylly',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

export const StudentController = {
    createStudent
}
