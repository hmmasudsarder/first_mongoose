import { Schema, model, connect } from "mongoose";
import { Student } from "./student.interface";


const studentSchema = new Schema<Student>({
    id: {type: String},
    name: {
        firstName: {
            type: String,
            required: true,
        },
        middleName: {
            type: String,
        },
        lastNameName: {
            type: String,
            required: true,
        },
    },
    gender: ["male", "female"],
    dateOfBirth: {type: String},
    email: {type: String, required: true}
})