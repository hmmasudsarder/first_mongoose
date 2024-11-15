import { Schema, model, connect } from "mongoose";
import { Student } from "./student.interface";


const studentSchema = new Schema<Student>({
    id: {type: String},
    name: {
        firstName: {
            type: String,
            require: true,
        },
        middleName: {
            type: String,
        },
        lastNameName: {
            type: String,
            require: true,
        },
    },
    gender: ["male", "female"],
})