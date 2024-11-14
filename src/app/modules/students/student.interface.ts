import { Schema, model, connect } from 'mongoose';

// 1. Create an interface representing a document in MongoDB.
export type Student = {
  name: string;
  email: string;
  avatar?: string;
}