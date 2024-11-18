import { Schema, model, connect } from 'mongoose';

// 1. Create an interface representing a document in MongoDB.
export type Student = {
    id: string;
  name: {
    firstName: string;
    middleName: string;
    lastName: string;
  },
  gender: "male"| "female";
  dateOfBirth: string;
  email: string;
  contactNo: number;
}