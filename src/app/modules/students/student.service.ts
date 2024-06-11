import { TStudent } from './student.interface';
import { Student } from './student.model';

const createStudentIntoDB = async (studentData: TStudent): Promise<TStudent> => {

  if (await Student.isUserExists(studentData.id)) {
    throw new Error("user already exists!")
  }
  const result = await Student.create(studentData);

  // const student = new Student(studentData);
  // if (await student.isUserExits(studentData.id)) {
  //   throw new Error("User already exists!")
  // }

  // const result = await student.save();
  return result;
};

const getAllStudentFromDB = async () => {
  const result = await Student.find();
  return result;
};

const getSingleStudent = async (id: string) => {
  const result = await Student.findOne({ id });
  return result;
};

export const StudentService = {
  createStudentIntoDB,
  getAllStudentFromDB,
  getSingleStudent,
};
